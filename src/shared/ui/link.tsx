import { NavLink, NavLinkProps, NavLinkRenderProps } from 'react-router'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import { SxProps, Theme } from '@mui/material'

const StyledLink = styled(NavLink)(({ theme }) => ({
  fontSize: '1rem',
  textDecoration: 'none',
  color: 'black',
  margin: '0 auto',
  padding: '0.5rem 1rem',
  position: 'relative',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '2px',
    bottom: 0,
    left: '50%',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s, left 0.3s',
  },
  '&:hover::after': {
    width: '100%',
    left: 0,
  },
  '&.active': {
    color: theme.palette.primary.main,
    '&::after': {
      width: '100%',
      left: 0,
    },
  },
}))

export default function CustomLink(props: NavLinkProps & { sx?: SxProps<Theme> }) {
  return (
    <StyledLink
      {...props}
      className={({ isActive }: NavLinkRenderProps) => clsx({ active: isActive })}
    />
  )
}
