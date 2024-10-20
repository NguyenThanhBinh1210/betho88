/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import { Profile } from '~/types/auth.type'
import { clearLS, getAccessTokenFromLS, getProfileFromLS } from '~/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: Profile | null
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>
  reset: () => void
  selectedTab: string
  setSelectedTab: any
  theme: string
  setTheme: any
}
export const getInitialAppContext: () => AppContextInterface = () => ({
  isAuthenticated: Boolean(!getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  selectedTab: 'mo',
  setSelectedTab: () => null,
  reset: () => null,
  theme: 'modern-6',
  setTheme: () => null
})
const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState<string>(initialAppContext.selectedTab)
  const [theme, setTheme] = useState<string>(initialAppContext.theme)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<Profile | null>(initialAppContext.profile)
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
        setTheme
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
