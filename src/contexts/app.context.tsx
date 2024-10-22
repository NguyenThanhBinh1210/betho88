import { createContext, useState } from 'react'
import { Profile } from '~/types/auth.type'
import { clearLS } from '~/utils/auth'
import { AppContextInterface, getInitialAppContext } from './appContextUtils'

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState<string>(initialAppContext.selectedTab)
  const [theme, setTheme] = useState<string>(initialAppContext.theme)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<Profile | null>(initialAppContext.profile)
  const [isMobile, setIsMobile] = useState<boolean>(initialAppContext.isMobile)
  const reset = () => {
    setIsAuthenticated(false)
    setProfile(null)
    clearLS()
  }
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        reset,
        setSelectedTab,
        selectedTab,
        theme,
        setTheme,
        setIsMobile,
        isMobile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
