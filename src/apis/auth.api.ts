import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const registerAccount = (body: {
  name: string
  email: string
  password: string
  confirmPassword: string
  otp: string
}) => http.post<AuthResponse>('/user/sign-up', body)
