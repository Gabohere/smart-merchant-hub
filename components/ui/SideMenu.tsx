import { useContext } from "react"

import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, LoginRounded, LogoutRounded, SearchOutlined} from "@mui/icons-material"
import { UIContext } from "./UIContext";



export const SideMenu = () => {

  const { sidemenuOpen, closeSideMenu } = useContext (UIContext);
    
  return (
    <Drawer
        open={ sidemenuOpen }
        onClose={ closeSideMenu }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
                    <Input
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                >
                                 <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItem>

                <ListItem button sx={{ display: { xs: ''} }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={'Contact'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: ''} }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={'About'} />
                </ListItem>


                <ListItem button>
                    <ListItemIcon>
                        <LoginRounded/>
                    </ListItemIcon>
                    <ListItemText primary={'Log In'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <LogoutRounded/>
                    </ListItemIcon>
                    <ListItemText primary={'Log Out'} />
                </ListItem>


                {/* Admin */}
                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>

                <ListItem button>
                    <ListItemIcon>
                        <CategoryOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Productos'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Campañas'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AdminPanelSettings/>
                    </ListItemIcon>
                    <ListItemText primary={'Canales'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'} />
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}