import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { ThemeProvider } from './context/ThemeContext'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
