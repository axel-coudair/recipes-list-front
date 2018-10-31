import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import {login} from "../../services/auth"

// import './App.css';

class Header extends Component {
    render() {
        login("axel4@axel4.com", "axel4")
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        // className={classes.menuButton}
                        color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit"
                        // className={classes.grow}
                    >
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
