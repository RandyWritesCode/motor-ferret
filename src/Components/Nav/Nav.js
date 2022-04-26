import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import TokenService from '../../Services/token-services';
import {
    AppBar,
    Box,
    Button,
    Card,
    CardMedia,
    Grid,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Nav.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
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
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Nav = props => {
    console.log(props);
    const pages = props.admin
        ? [
              { title: 'Add Event', link: '/event-form' },
              { title: 'Search Events', link: '/events-search' },
              { title: 'Events', link: '/events' },
              { title: 'View Users', link: '/users' },
          ]
        : [
              { title: 'Add Event', link: '/event-form' },
              { title: 'Search Events', link: '/events-search' },
              { title: 'Events', link: '/events' },
          ];

    const [anchorEl, setAnchorEl] = useState(null);
    const primaryOpen = Boolean(anchorEl);
    const handlePrimaryMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    const handlePrimaryMenuClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'primary-menu-button';
    const renderPrimaryMenu = (
        <Menu
            anchorEl={anchorEl}
            id='primaryButton'
            keepMounted
            open={primaryOpen}
            onClose={handlePrimaryMenuClose}
            MenuListProps={{
                'aria-labelledby': menuId,
            }}
        >
            {pages.map((page, idx) => {
                return (
                    <MenuItem
                        component={Link}
                        to={page.link}
                        key={idx}
                        onClick={handlePrimaryMenuClose}
                    >
                        {page.title}
                    </MenuItem>
                );
            })}
        </Menu>
    );
    return (
        <Box
            sx={{ flexGrow: 1, position: 'fixed', zIndex: '1', width: '100%' }}
        >
            <AppBar>
                <Toolbar>
                    <IconButton
                        id='primary-menu-button'
                        aria-controls={
                            primaryOpen ? 'primaryButton' : undefined
                        }
                        aria-haspopup='true'
                        aria-expanded={primaryOpen ? 'true' : undefined}
                        onClick={handlePrimaryMenuOpen}
                    >
                        <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>

                    <Typography
                        variant='h1'
                        sx={{ fontSize: '1.5rem', paddingLeft: 4 }}
                    >
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            Motor Ferret
                        </Link>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Search…'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    {renderPrimaryMenu}
                    <Grid item xs />
                    <Grid>
                        {TokenService.hasAuthToken() ? (
                            <Button
                                color='inherit'
                                component={Link}
                                to='/'
                                onClick={props.handleLogout}
                            >
                                Sign Out
                            </Button>
                        ) : (
                            <Button color='inherit' onClick={props.handleLogin}>
                                Login
                            </Button>
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
        // <nav>
        //     <div className=' nav-container'>
        //         <Link className=' nav-item flex1' to='/'>
        //             <img
        //                 src={Logo}
        //                 alt='motor ferret logo, a ferret driving a red car'
        //             />
        //         </Link>
        //         <div className='nav-item nav-header flex2'>
        //             <Link to='/'>
        //                 <h1>Motor Ferret</h1>
        //             </Link>
        //             <h2>The Ultimate Motorsports Event Finder</h2>
        //         </div>
        //     </div>
        //     {this.props.loggedIn === true
        //         ? this.renderLogoutLink()
        //         : this.renderLoginLink()}
        // </nav>
    );
};

export default Nav;
// renderLoginLink() {
//     return (
//         <ul className='item'>
//             <li>
//                 <Link to='/event-form'>Add Event</Link>
//             </li>
//             <li>
//                 <Link to='/events-search'>Search Events</Link>
//             </li>
//             <li>
//                 <Link to='/events'>Events</Link>
//             </li>
//             <li>
//                 <Link to='/login'>Login</Link>
//             </li>
//             <li>
//                 <Link to='/sign-up'>SignUp</Link>
//             </li>
//         </ul>
//     );
// }

// renderLogoutLink() {
//     return (
//         <ul className='item'>
//             <li>
//                 <Link to='/event-form'>Add Event</Link>
//             </li>
//             <li>
//                 <Link to='/events-search'>Search Events</Link>
//             </li>
//             <li>
//                 <Link to='/events'>Events</Link>
//             </li>
//             {this.props.admin === 'Yes' ? (
//                 <li>
//                     <Link to='users'>View Users</Link>
//                 </li>
//             ) : null}
//             <li>
//                 <Link to='/' onClick={this.props.handleLogout}>
//                     Logout
//                 </Link>
//             </li>
//         </ul>
//     );
// }
