import { createTheme } from '@mui/material'

export const theme = createTheme({
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
