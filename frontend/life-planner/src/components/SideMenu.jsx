import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { COLORS, FONTS } from '../styles/Theme'
import '../styles/Fonts.css'

const SideMenu = () => {
  const [open, setOpen] = React.useState(true)

  const toggleDrawer = (state) => () => setOpen(state)

  const menuItems = [
    'Dashbord',
    'Planning',
    'Tasks',
    'Appointments',
    'Health',
    'Feelings',
    'Manifest',
    'Reports',
    'Settings',
  ]

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            margin: '16px',
            width: 280,
            height: 'calc(100% - 32px)',
            overflow: 'hidden',
            backgroundColor: COLORS.primary,
            color: COLORS.secondary,
          },
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: 30,
            right: 15, // Drawer’ın dışına taşacak şekilde
            backgroundColor: COLORS.accent || '#F9A826',
            color: COLORS.primary,
            borderRadius: '50%',
            width: 30,
            height: 30,
            '&:hover': { backgroundColor: COLORS.accent },
            boxShadow: 2,
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Başlık */}
        <Box
          textAlign="left"
          sx={{
            padding: '20px',
            fontFamily: FONTS.heading,
            fontSize: '2rem',
            py: 2,
          }}
        >
          Life Planner
        </Box>

        {/* Menü Listesi */}
        <Box
          sx={{
            width: '100%',
            px: 2,
            fontFamily: FONTS.body,
          }}
          role="presentation"
        >
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Yan içerik alanı */}
      <div>
        <Box variant="h4" sx={{ mb: 2 }}>
          Yan Alan Başlıkk
        </Box>
      </div>
    </Box>
  )
}

export default SideMenu
