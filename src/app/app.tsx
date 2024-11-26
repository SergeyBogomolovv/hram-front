import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import MainLayout from './layouts/main'
import MainPage from '@/pages/main'
import SchedulePage from '@/pages/schedule/schedule'
import AboutPage from '@/pages/about'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'

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
