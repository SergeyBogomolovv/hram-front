import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './main-layout'
import MainPage from '../pages/main'

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
