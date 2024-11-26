import { BrowserRouter, Route, Routes } from 'react-router'
import { createTheme, ThemeProvider } from '@mui/material'
import MainLayout from './main-layout'
import MainPage from '@/pages/main'
import SchedulePage from '@/pages/schedule/schedule'
import AboutPage from '@/pages/about'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9800',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5',
      paper: '#e0f2ff',
    },
    text: {
      primary: '#000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path='schedule' element={<SchedulePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
