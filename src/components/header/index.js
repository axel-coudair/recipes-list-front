import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LoginButtonModal from "../loginButtonModal";
import RegisterButtonModal from "../registerButtonModal";
import SignOutButton from "../signOutButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

const drawerWidth = 240;

const styles = theme => ({
    // root: {
    //     display: 'flex',
    // },

    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
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
        open: false
    }
    navbarLinks() {
        if (this.props.authenticated) {
            return [
                <SignOutButton />
            ];
        }
        return [
            <>
                <LoginButtonModal />
                <RegisterButtonModal />
            </>
        ];
    }

    menuClick = () => {
        this.setState(state => ({ open: !state.open }));
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
                            // className={classes.menuButton}
                            color="inherit" aria-label="Menu" >
                            <MenuIcon onClick={this.menuClick} />
                        </IconButton>
                        <Typography variant="h6" color="inherit"
                            className={classes.grow}
                        >
                            My Recipes List
                            </Typography>

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

// export default 
export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(Header));