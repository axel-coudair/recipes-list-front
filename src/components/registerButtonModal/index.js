import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Modal from "@material-ui/core/Modal/Modal";
import TextField from "@material-ui/core/TextField/TextField";
import { register } from "../../services/auth";

// import './App.css';
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    error: null,
};

class Register extends Component {
    state = {
        ...INITIAL_STATE
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = (event) => {
        const {
            username,
            email,
            password,
            passwordConf
        } = this.state;

        register(email, password, username, passwordConf)
            .then(result => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState(byPropKey('error', error.response.data));
            });

        event.preventDefault();
    }



    render() {

        const {
            username,
            email,
            password,
            passwordConf,
            error,
        } = this.state;
        return (
            <>
                {/*<Typography gutterBottom>Click to get the full Modal experience!</Typography>*/}
                <Button onClick={this.handleOpen} color="inherit">Register</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className="modal-style" >
                        <Typography variant="h6" id="modal-title">
                            Register
                        </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="standard-name"
                                label="email"
                                className="modal-form-style"
                                value={email}
                                onChange={event => this.setState(byPropKey('email', event.target.value))}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="username"
                                className="modal-form-style"
                                value={username}
                                onChange={event => this.setState(byPropKey('username', event.target.value))}
                                margin="normal"
                            />
                            <TextField
                                id="standard-uncontrolled"
                                label="Password"
                                value={password}
                                type="password"
                                className="modal-form-style"
                                onChange={event => this.setState(byPropKey('password', event.target.value))}
                                margin="normal"
                            />
                            <TextField
                                id="standard-uncontrolled"
                                label="Password conf"
                                value={passwordConf}
                                type="password"
                                className="modal-form-style"
                                onChange={event => this.setState(byPropKey('passwordConf', event.target.value))}
                                margin="normal"
                            />
                            <Button variant="contained" className="modal-form-style" color="primary" type="submit" value="Submit">
                                Submit
                        </Button>
                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Register;
