import { BrowserRouter, Route, Routes } from 'react-router'
import MainPage from '../pages/main'
import MainLayout from './main-layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
