import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Divider } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "black",
        color: "white",
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: '200px',
        backgroundColor: 'black',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
});

class Navbar extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div className={classes.root}>
                <List>
                    {['Start-ups', 'Industry', 'Technology', 'Social Entrepreneurship', 'Venture Hacks'].map((text, index) => (
                        <ListItem button key={text}>
                            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Subscribe', 'Search', 'Write'].map((text, index) => (
                        <ListItem button key={text}>
                            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div className="navbar-fixed">
                <nav className="nav-wrapper black darken-3">
                    <div style={{ margin: "0 5%" }}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link className="brand-logo" exact to="/">Market gad</Link>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/about">Start-ups</NavLink></li>
                            <li><NavLink to='/about'>Industry</NavLink></li>
                            <li><NavLink to='/about'>Technology</NavLink></li>
                            <li><NavLink to='/about'>Social Entrepreneurship</NavLink></li>
                            <li style={{ paddingRight: "10em" }}><NavLink to='/about'>Venture Hacks</NavLink></li>
                            <li><NavLink to='/about'></NavLink></li>
                            <li><NavLink to='/about'>Search</NavLink></li>
                            <li><NavLink to='/about'>Subscribe</NavLink></li>
                            <li><NavLink to='/about'>Write</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Navbar));
