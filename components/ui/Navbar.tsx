import { useContext } from 'react'

import Link from 'next/link'

import { AppBar, Box, Toolbar, Button, Typography} from '@mui/material'
import { UIContext } from './UIContext'

const links = [
  {
    label: 'Contact',
    route: '/contact'
  },
  {
    label: 'About',
    route: '/About'
  }
]

export const Navbar = () => {

  const { openSideMenu } = useContext (UIContext);

  return (
    <AppBar>
      <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'block', md: 'flex' },
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                Reech Ai
            </Typography>
            <Box flex={ 1 }/>
            <Box sx={{
                display: { xs: 'none', md: 'block' },
            }}>
              <ul>
                {links.map(({ label, route }) => (
                  <Link key={route} href={route} >
                      <Button>{label}</Button>
                  </Link>
                ))}
              </ul>
            </Box>
            
            <Box flex={ 1 } />
            <Box sx={{
                display: { xs: 'none', md: 'block' },
            }}
            >
              <Button>Log in</Button>
              <Button>Sign Up</Button>
            </Box>

            <Button
                onClick={ openSideMenu }
                sx={{display: { md: 'none' },}}>
                  Menu
            </Button>
      </Toolbar>
    </AppBar>
  )
}