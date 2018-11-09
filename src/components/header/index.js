import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import LoginButtonModal from "../loginButtonModal";
import RegisterButtonModal from "../registerButtonModal";
import SignOutButton from "../signOutButton";
import DrawerHolder from "../drawerHolder"

class Header extends Component {
    state = {
        drawerOpen: false
    }

    menuClick = () => {
        this.setState(state => ({ drawerOpen: !state.drawerOpen }));
    };

    render() {
        return (
            <React.Fragment>
                <DrawerHolder open={this.state.drawerOpen} />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            // className={classes.menuButton}
                            color="inherit" aria-label="Menu" >
                            <MenuIcon onClick={this.menuClick} />
                        </IconButton>
                        <Typography variant="h6" color="inherit"
                        // className={classes.grow}
                        >
                            My Recipes List
                    </Typography>
                        <LoginButtonModal />
                        <RegisterButtonModal />
                        <SignOutButton />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default Header;
