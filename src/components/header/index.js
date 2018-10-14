import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "../login";
import Register from "../register";

// import './App.css';

class Header extends Component {
    render() {
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
                        My Recipes List
                    </Typography>
                    <Login/>
                    <Register/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
