import React, { Component } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";


import { connect } from "react-redux"
import { signOutAction } from "../../actions/usersActions"
class MenuProfil extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <>
                <IconButton
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="inherit"

                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.props.signOutAction}>Log Out</MenuItem>
                </Menu>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signOutAction: () => {
        dispatch(signOutAction());
    }
})
export default connect(null, mapDispatchToProps)(MenuProfil);