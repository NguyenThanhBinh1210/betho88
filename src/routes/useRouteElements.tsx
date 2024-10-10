import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
import LoginLayout from '~/layouts/LoginLayout'
import Home from '~/pages/Home'
import HomeLayout from '~/layouts/HomeLayout'
import LobbyPage from '~/pages/Mobile/LobbyPage'
import ManagerLayout from '~/layouts/ManagerLayout'
import TiSo from '~/pages/Mobile/TiSo'
import SaoKe from '~/pages/Mobile/SaoKe'
import Profile from '~/pages/Mobile/Profile'
import Sport from '~/pages/Mobile/Sport'
import Follow from '~/pages/Mobile/Follow'
import TopController from '~/layouts/manager/TopController'
import DesktopLayout from '~/layouts/Desktop/DesktopLayout'
import Sports from '~/pages/Desktop/Sports'

const isMobile = false

const pcRoutes = [
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
    path: '/Sports',
    element: (
      <DesktopLayout>
        <Sports />
      </DesktopLayout>
    )
  },
  {
    path: '*',
    element: <NotFound />
  }
]

const mobileRoutes = [
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
    path: '/sport',
    element: (
      <ManagerLayout>
        <TopController />
        <Sport />
      </ManagerLayout>
    )
  },
  {
    path: '/follow',
    element: (
      <ManagerLayout>
        <TopController />
        <Follow />
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
]

const useRouteElements = () => {
  const routes = isMobile ? mobileRoutes : pcRoutes
  const routeElements = useRoutes(routes)
  return routeElements
}

export default useRouteElements
