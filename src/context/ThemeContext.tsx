import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ThemeProviderProps {
  initialTheme?: string
  children: ReactNode
}

export type TypeThemeContext = {
  theme: string
  setTheme: (t: string) => void
}

const getInitialTheme = () => {
  if (localStorage) {
    const storePrefs = localStorage.getItem('@pc:color-theme')
    if (typeof storePrefs === 'string') {
      return storePrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'dark'
}

export const ThemeContext = createContext<TypeThemeContext>(
  {} as TypeThemeContext,
)

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('@pc:color-theme', rawTheme)
  }

  useEffect(() => {
    const initialTheme = getInitialTheme()

    rawSetTheme(theme || initialTheme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
