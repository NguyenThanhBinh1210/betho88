import axios from 'axios'
import omit from 'lodash/omit'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccesTokenToLS,
  setProfileFromLS,
  setRefreshTokenToLS
} from './auth'
import { Profile } from '~/types/auth.type'

function createHttp() {
  let accessToken = getAccessTokenFromLS()
  let refreshToken = getRefreshTokenFromLS()
  let refreshTokenRequest: Promise<string> | null = null

  const instance = axios.create({
    baseURL: 'https://api-thuong-mai.vercel.app/api/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.request.use(
    (config) => {
      if (accessToken && config.headers) {
        config.headers['token'] = `Beare ${accessToken}`
        return config
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      const { url } = response.config
      if (url === '/user/sign-in' || url === '/user/sign-up' || url === '/user/google-login') {
        const dataProfile = response.data.data
        const newUser = omit(dataProfile, ['password', 'isAdmin'])
        accessToken = response.data.access_token
        refreshToken = response.data.refresh_token
        if (response.data.status !== 'ERR') {
          setProfileFromLS(newUser as Profile)
          setAccesTokenToLS(accessToken)
          setRefreshTokenToLS(refreshToken)
        }
      } else if (url === '/user/log-out') {
        accessToken = ''
        refreshToken = ''
        clearLS()
      }
      return response
    },
    (error) => {
      const config = error.response?.config || {}
      const { url } = config
      if (url !== 'user/refresh-token') {
        refreshTokenRequest = refreshTokenRequest
          ? refreshTokenRequest
          : handleRefreshToken().finally(() => {
              refreshTokenRequest = null
            })
        return refreshTokenRequest.then((access_token) => {
          return instance({ ...config, headers: { ...config.headers, token: `Beare ${access_token}` } })
        })
      }
      clearLS()
      accessToken = ''
      refreshToken = ''
      return Promise.reject(error)
    }
  )

  function handleRefreshToken() {
    return instance
      .post('user/refresh-token', {
        refresh_token: refreshToken
      })
      .then((res) => {
        const { access_token } = res.data.data
        setAccesTokenToLS(access_token)
        accessToken = access_token
        return access_token
      })
      .catch((error) => {
        window.location.reload()
        clearLS()
        accessToken = ''
        refreshToken = ''
        throw error
      })
  }

  return instance
}

const http = createHttp()

export default http
