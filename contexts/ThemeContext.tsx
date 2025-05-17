import React, { createContext, useContext, useState, useEffect } from 'react'
import { Theme, ThemeType, themes } from '../constants/themes'

interface ThemeContextType {
  currentTheme:       Theme
  drivingBehavior:    ThemeType
  setDrivingBehavior: (behavior: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [drivingBehavior, setDrivingBehavior] = useState<ThemeType>('calm')
  const [currentTheme, setCurrentTheme]       = useState<Theme>(themes.calm)

  useEffect(() => {
    setCurrentTheme(themes[drivingBehavior])
  }, [drivingBehavior])

  return (
    <ThemeContext.Provider value={{ currentTheme, drivingBehavior, setDrivingBehavior }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}