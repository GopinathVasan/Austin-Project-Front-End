import * as React from 'react';
import { useContext , useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { ColorModeContext, tokens } from "../theme.js";
import { useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
  marginLeft: 15,
  width: '25%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Custom styled ListItemButton
const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.primary.light, // Default text color
  backgroundColor: theme.palette.primary[400],
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1), // Custom hover background
    color: theme.palette.primary.main, // Custom hover text color
  },
}));

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleMenuClick = () => {
    handleLogout();
    handleClick(GrowTransition)();
};

  const [logoutMessage, setLogoutMessage] = useState('');

  const handleLogout = async () => {
    try {
      // Make a request to the logout endpoint 
      // const response = await axios.get('https://austin-partnership-back-end.onrender.com/auth/logout'); // or '/logout1' depending on which endpoint you want to use
      const response = await axios.get('http://127.0.0.1:8000/auth/logout');
      // Assuming the logout endpoint returns a success message upon successful logout
      setLogoutMessage(response.data.message); // You may need to adjust this based on the actual response format
      // Redirect to the login page or perform any other necessary actions
      // window.location.href = 'https://austinpartnership.in/';
      window.location.href = 'http://localhost:3000/line';// Redirect to the login page
    } catch (error) {
      console.error('Logout failed:', error);
      alert('logout failed');
      // Handle error
    }
  };

  const lists = [
    {
      name:'Dashboard',
      icon:<HomeOutlinedIcon />,
      to: '/dashboard'
    },
    {
      name:'Manage Team',
      icon:<PeopleOutlinedIcon />,
      to: '/team'
    },
    {
      name:'Contact Information',
      icon:<ContactsOutlinedIcon />,
      to: '/dcontact'
    },
    {
      name:'Invoice Balance',
      icon:<ReceiptOutlinedIcon />,
      to: '/invoice'
    },
    {
      name:'Register',
      icon:<PersonOutlinedIcon />,
      to: '/register'
    },
    {
      name:'Calendar',
      icon:<CalendarTodayOutlinedIcon />,
      to: '/calendar'
    },
    {
      name:'FAQ Page',
      icon:<HelpOutlineOutlinedIcon />,
      to: '/faq'
    },
    {
      name:'Bar Chart',
      icon:<BarChartOutlinedIcon />,
      to: '/bar'
    },
    {
      name:'Pie Chart',
      icon:<PieChartOutlineOutlinedIcon />,
      to: '/pie'
    },
    {
      name:'Line Chart',
      icon:<TimelineOutlinedIcon />,
      to: '/line'
    },
  ]

  const DrawerList = (
    <Box sx={{ width: drawerWidth }} role="presentation" onClick={toggleDrawer(false)} backgroundColor={theme.palette.box.main}>
      <List>
        {lists.slice(0, 1).map((list, index) => (
          <ListItem key={index}>
            <CustomListItemButton component={Link} to={list.to}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Data
      </Typography>
      <List>
        {lists.slice(1, 4).map((list, index) => (
          <ListItem key={index}>
            <CustomListItemButton component={Link} to={list.to}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Pages
      </Typography>
      <List>
        {lists.slice(4, 7).map((list, index) => (
          <ListItem key={index}>
            <CustomListItemButton component={Link} to={list.to}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Chart
      </Typography>
      <List>
        {lists.slice(7).map((list, index) => (
          <ListItem key={index}>
            <CustomListItemButton component={Link} to={list.to}>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </CustomListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClick}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={colorMode.toggleColorMode}>
        <IconButton size="large" color='primary'>
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <p>{theme.palette.mode} mode</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ bgcolor: theme.palette.box.main }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
            color='primary'
          >
            Dashboard
          </Typography>
          <Search sx={{ color: theme.palette.primary.main, bgcolor: theme.palette.neutral.dark }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size='large' onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails">
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            top: { xs: 0, md: 64 }, // Height of the AppBar
            height: 'calc(100% - 64px)', // Ensuring the Drawer takes up the correct height
            overflowY: 'auto', // Enable vertical scrolling
            // bgcolor: colors.primary[400]
          },
        }}
      >
        {DrawerList}
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={logoutMessage}
        key={state.Transition.name}
        autoHideDuration={1200}
      />
    </Box>
  );
}
