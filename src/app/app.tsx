import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import MainLayout from './layouts/main';
import MainPage from '@/pages/main';
import SchedulePage from '@/pages/schedule/schedule';
import AboutPage from '@/pages/about';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import { publicLoader } from '@/pages/auth/loaders/public';
import SectionsPage from '@/pages/sections/sections';
import EventPage from '@/pages/event';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'sections', element: <SectionsPage /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'login', element: <LoginPage />, loader: publicLoader },
      { path: 'register', element: <RegisterPage />, loader: publicLoader },
      { path: 'events/:id', element: <EventPage /> },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
