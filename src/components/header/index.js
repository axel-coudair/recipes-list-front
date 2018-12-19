import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { withRouter } from 'react-router'

import LoginButtonModal from "../loginButtonModal";
import RegisterButtonModal from "../registerButtonModal";
import { signOutAction } from "../../actions/usersActions"
import { Menu, MenuItem } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    headerTitle: {
        flexGrow: 1,
        textDecoration: "none",
        color: "white"

    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});


class Header extends React.Component {
    state = {
        open: false,
        openHeaderMenu: false,
        anchorEl: null,
    }

    navbarLinks() {
        if (this.props.authenticated) {
            return [
                < >
                    <IconButton
                        aria-owns={this.state.openHeaderMenu ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.iconHeaderClick}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={this.state.openHeaderMenu}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <MenuItem onClick={this.props.signOutAction}>Log Out</MenuItem>
                    </Menu>
                </>
            ];
        }
        return [
            <>
                <LoginButtonModal />
                <RegisterButtonModal />
            </>
        ];
    }
    handleClose = () => {
        this.setState(state => ({ thianchorEl: null }));
    };

    iconHeaderClick = () => {
        this.setState(state => ({ openHeaderMenu: !state.openHeaderMenu }));
    };
    menuClick = () => {
        this.setState(state => ({ open: !state.open }));
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit" aria-label="Menu" >
                            <MenuIcon onClick={this.menuClick} />
                        </IconButton>
                        <Link to="/recipes" className={classes.headerTitle}>
                            <Typography variant="h6" color="inherit"
                            >
                                My Recipes List
                            </Typography>
                        </Link>
                        {this.navbarLinks()}
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>
                        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}

                        <ListItem button >
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <Link to="/houses">
                                <ListItemText primary={"Houses"} />
                            </Link>
                        </ListItem>
                        {/* ))} */}
                    </List>
                    {/* <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List> */}
                </Drawer>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        authenticated: state.usersReducer.authenticated
    };
}
const mapDispatchToProps = dispatch => ({
    signOutAction: () => {
        dispatch(signOutAction());
    }
})

// export default 
export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(withRouter(Header)));