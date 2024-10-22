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
import { useContext, useMemo } from 'react'
import BetListApp from '~/pages/Desktop/Statement/BetListApp'
import ScreenLayout from '~/layouts/Desktop/ScreenLayout'
import AllStatement from '~/pages/Desktop/Statement/AllStatement'
import Result from '~/pages/Desktop/Result'
import MessageHistory from '~/pages/Desktop/MessageHistory'
import AccountAndStatememt from '~/pages/Desktop/Preferences/AccountAndStatememt'
import PreferencesLayout from '~/pages/Desktop/Preferences/PreferencesLayout'
import PageAndOddsDisplay from '~/pages/Desktop/Preferences/PageAndOddsDisplay'
import CustomizeSportsPriorityDisplay from '~/pages/Desktop/Preferences/CustomizeSportsPriorityDisplay'
import { AppContext } from '~/contexts/app.context'

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
    path: '/Statement/BetListApp',
    element: (
      <ScreenLayout>
        <BetListApp />
      </ScreenLayout>
    )
  },
  {
    path: '/Statement/AllStatement',
    element: (
      <ScreenLayout>
        <AllStatement />
      </ScreenLayout>
    )
  },
  {
    path: '/Result',
    element: (
      <ScreenLayout>
        <Result />
      </ScreenLayout>
    )
  },
  {
    path: '/Statement/MessageHistory',
    element: (
      <ScreenLayout>
        <MessageHistory />
      </ScreenLayout>
    )
  },
  {
    path: '/Preferences/AccountAndStatememt',
    element: (
      <ScreenLayout>
        <PreferencesLayout>
          <AccountAndStatememt />
        </PreferencesLayout>
      </ScreenLayout>
    )
  },
  {
    path: '/Preferences/PageAndOddsDisplay',
    element: (
      <ScreenLayout>
        <PreferencesLayout>
          <PageAndOddsDisplay />
        </PreferencesLayout>
      </ScreenLayout>
    )
  },
  {
    path: '/Preferences/CustomizeSportsPriorityDisplay',
    element: (
      <ScreenLayout>
        <PreferencesLayout>
          <CustomizeSportsPriorityDisplay />
        </PreferencesLayout>
      </ScreenLayout>
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
  const { isMobile } = useContext(AppContext)

  const routes = useMemo(() => {
    return isMobile ? mobileRoutes : pcRoutes
  }, [isMobile])

  return useRoutes(routes)
}

export default useRouteElements