import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
// import { AppContext } from '~/contexts/app.context'
import LoginLayout from '~/layouts/LoginLayout'
import Home from '~/pages/Home'
// import { useContext } from 'react'
import HomeLayout from '~/layouts/HomeLayout'
import LobbyPage from '~/pages/Controller/LobbyPage'
import ManagerLayout from '~/layouts/ManagerLayout'
import TiSo from '~/pages/Controller/TiSo'
import SaoKe from '~/pages/Controller/SaoKe'
import Profile from '~/pages/Controller/Profile'

const useRouteElements = () => {

  const routeElements = useRoutes([
    {
      path: 'login',
      element: (
        <LoginLayout>
          <Login />
        </LoginLayout>
      )
    },
    {
      path: 'register',
      element: (
        <LoginLayout>
          <Register />
        </LoginLayout>
      )
    },
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/lobby',
      element: (
        <ManagerLayout>
          <LobbyPage />
        </ManagerLayout>
      )
    },
    {
      path: '/ratio',
      element: (
        <ManagerLayout>
          <TiSo />
        </ManagerLayout>
      )
    },
    {
      path: '/statement',
      element: (
        <ManagerLayout>
          <SaoKe />
        </ManagerLayout>
      )
    },
    {
      path: '/result',
      element: (
        <ManagerLayout>
          <SaoKe />
        </ManagerLayout>
      )
    },
    {
      path: '/profile',
      element: (
        <ManagerLayout>
          <Profile />
        </ManagerLayout>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
