import { Moon, Sun } from 'react-feather'
import { useTheme } from '../context/ThemeContext'

export function ToggleIcon() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Sun size={20} color="#828282" />
      ) : (
        <Moon size={20} color="#828282" />
      )}
    </button>
  )
}
