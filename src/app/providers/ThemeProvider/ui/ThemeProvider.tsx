import { type FC, useMemo, useState, ReactNode } from 'react'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { Theme } from '@/shared/const/theme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export interface ThemeProviderProps {
  initialTheme?: Theme,
  children:ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ( props ) => {
  const {
    children,
    initialTheme
  } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  document.body.className = theme
  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider
