import { ThemeContext } from '../../context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage'
import { Theme } from '@/shared/const/theme'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.BROWN
        break
      case Theme.BROWN:
        newTheme = Theme.DARK
        break
      default: newTheme = Theme.LIGHT
    }
    setTheme?.(newTheme)

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  }
}
