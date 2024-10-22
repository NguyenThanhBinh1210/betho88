import { getAccessTokenFromLS, getProfileFromLS } from '~/utils/auth'
import React from 'react'
import { Profile } from '~/types/auth.type'

export interface AppContextInterface {
  selectedTab: string
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: Profile | null
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>
  reset: () => void
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
  isMobile: boolean
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export function getInitialAppContext(): AppContextInterface {
  return {
    isAuthenticated: Boolean(getAccessTokenFromLS()),
    setIsAuthenticated: () => null,
    profile: getProfileFromLS(),
    setProfile: () => null,
    selectedTab: 'default',
    setSelectedTab: () => {},
    reset: () => null,
    theme: 'modern-6',
    setTheme: () => null,
    isMobile: false,
    setIsMobile: () => null
  }
}
