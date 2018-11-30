import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import { signOutAction } from "../../actions/usersActions"
import { connect } from "react-redux"

class SignOutButton extends Component {
    render() {
        return (
            <Button
                type="button"
                onClick={this.props.signOutAction}
            >
                Sign Out
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOutAction: () => {
            dispatch(signOutAction());
        }
    }
}

export default connect(null, mapDispatchToProps)(SignOutButton);