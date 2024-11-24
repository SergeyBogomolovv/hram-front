import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './main-layout'
import MainPage from '../pages/main'
import SchedulePage from '../pages/schedule/schedule'
import AboutPage from '../pages/about'
import LoginPage from '../pages/login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path='schedule' element={<SchedulePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
