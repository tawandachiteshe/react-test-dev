import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Menu, MenuItem, Tooltip, Avatar, Grid, createTheme, Button } from '@mui/material';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PolicyIcon from '@mui/icons-material/Policy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { orange } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";
import { HolidayVillage, LocationCity } from "@mui/icons-material";



import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';



export const drawerWidth = 240;

export const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

export const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('xs')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar - using the spread operator
    ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

// import type {} from '@mui/x-date-pickers/themeAugmentation';
// // When using TypeScript 3.x and below
// import '@mui/x-date-pickers/themeAugmentation';
// import {createTheme} from "@mui/system";
//
// const theme = createTheme({
//     components: {
//         MuiDatePicker: {
//             styleOverrides: {
//                 root: {
//                     backgroundColor: 'red',
//                 },
//             },
//         },
//     },
// });


const drawermenutop = [
    { name: "Home", icon: <HomeIcon />, link: "/bans" },
    { name: "Cases", icon: <MedicalServicesIcon />, link: "/bans/cases" },
    { name: "Schedules", icon: <CalendarMonthIcon />, link: "/bans/schedules" },
    { name: "Bookings", icon: <LibraryBooksIcon />, link: "/bans/bookings" }
];

const drawermenubottom = [
    { name: "Insurers", icon: <AccountBalanceIcon />, link: "/bans/insurers" },
    { name: "Users", icon: <PeopleAltIcon />, link: "/bans/users" }
];


const outerTheme = createTheme({
    palette: {
        mode: "light",

        primary: {
            light: "#33b675",
            main: "#00A453",
            dark: "#00723a",
            contrastText: '#fff'
        },
        text: {
            primary: "#000"
        },
        secondary: {
            light: "#bc3f55",
            main: "#ac0f2b",
            dark: "#780a1e",
            contrastText: '#fff'
        }
    },
});


function App({ children }) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const [anchorE1, setAnchorE1] = React.useState(null);

    const openMenu = Boolean(anchorE1);

    const handleClick = (event) => {
        // setAnchorE1(event?.currentTarget);
    };


    const handleClose = () => {
        setAnchorE1(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onLogOut = async () => {
        // const data = await axios.post("/api/auth/logout");
        // await mutateUser(data as any)
        // router.push("/auth/login")
    }
    return (
        <ThemeProvider theme={outerTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                mr: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            {/* {pathname === '/bans' ? 'HOME' : pathname?.slice(6).toUpperCase()} */}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>T</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Menu id='resources-menu' anchorEl={anchorE1} open={openMenu} onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: '#6b9d0b' }} /> :
                                <ChevronLeftIcon sx={{ color: '#00A453' }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List sx={{ width: open ? drawerWidth : 0 }}>
                        {drawermenutop?.map((item, index) => (

                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>

                                <ListItemButton
                                    onClick={() => {
                                        // router.push(item.link)
                                    }}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        "&.Mui-selected": {
                                            backgroundColor: "#d9ead3"
                                        },
                                        "&.Mui-focusVisible": {
                                            backgroundColor: "#d9ead3"
                                        },
                                        ":hover": {
                                            backgroundColor: "#d9ead3"
                                        }
                                    }}

                                    selected={false}


                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            justifyContent: 'center',
                                            color: '#00A453',

                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>

                                    <ListItemText primary={item.name} sx={{ ml: open ? 3 : 0, opacity: open ? 1 : 0 }}>
                                    </ListItemText>

                                </ListItemButton>

                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List sx={{ width: open ? drawerWidth : 0 }}>
                        {drawermenubottom?.map((item, index) => (
                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        "&.Mui-selected": {
                                            backgroundColor: "#d9ead3"
                                        },
                                        "&.Mui-focusVisible": {
                                            backgroundColor: "#d9ead3"
                                        },
                                        ":hover": {
                                            backgroundColor: "#d9ead3"
                                        }
                                    }}
                                    selected={false}



                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            justifyContent: 'center',
                                            color: '#00A453'
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} sx={{ ml: open ? 3 : 0, opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                        {true ?
                            <>
                                <ListItem key={"Provinces"} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        onClick={() => {
                                            router.push("/bans/provinces")
                                        }}
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                            "&.Mui-selected": {
                                                backgroundColor: "#d9ead3"
                                            },
                                            "&.Mui-focusVisible": {
                                                backgroundColor: "#d9ead3"
                                            },
                                            ":hover": {
                                                backgroundColor: "#d9ead3"
                                            }
                                        }}
                                        selected={false}



                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                justifyContent: 'center',
                                                color: '#00A453'
                                            }}
                                        >
                                            <LocationCity />
                                        </ListItemIcon>
                                        <ListItemText primary={"Provinces"} sx={{ ml: open ? 3 : 0, opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>


                                <ListItem key={"Surburb"} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        onClick={() => {
                                            router.push("/bans/suburbs")
                                        }}
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                            "&.Mui-selected": {
                                                backgroundColor: "#d9ead3"
                                            },
                                            "&.Mui-focusVisible": {
                                                backgroundColor: "#d9ead3"
                                            },
                                            ":hover": {
                                                backgroundColor: "#d9ead3"
                                            }
                                        }}
                                        selected={false}



                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                justifyContent: 'center',
                                                color: '#00A453'
                                            }}
                                        >
                                            <HolidayVillage />
                                        </ListItemIcon>
                                        <ListItemText primary={"Suburbs"} sx={{ ml: open ? 3 : 0, opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            </>

                            : <></>
                        }

                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                    <DrawerHeader />
                    <Grid pl={open ? 30 : 6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {children} { /* iteswm hewr */ }

                            <Button>Code here!!</Button>
                            <Button variant="contained">Hahah</Button>

                        </LocalizationProvider>
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    )
}


export default App
