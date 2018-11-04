import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Modal from "@material-ui/core/Modal/Modal";
import TextField from "@material-ui/core/TextField/TextField";
import {auth} from "../../firebase";

// import './App.css';
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class Register extends Component {
    state = {...INITIAL_STATE
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
            passwordOne,
        } = this.state;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }



    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        return (
            <div>
                {/*<Typography gutterBottom>Click to get the full Modal experience!</Typography>*/}
                <Button onClick={this.handleOpen}>Register</Button>
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
                        {/* <Typography variant="subtitle1" id="simple-modal-description">
                            Re
                        </Typography> */}
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
                                value={passwordOne}
                                type="password"
                            className="modal-form-style"
                                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                margin="normal"
                            />
                            <TextField
                                id="standard-uncontrolled"
                                label="Password conf"
                                value={passwordTwo}
                                type="password"
                            className="modal-form-style"
                                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                                margin="normal"
                            />
                            <Button variant="contained" color="primary" type="submit" value="Submit">
                            Submit
                        </Button>

                            { error && <p>{error.message}</p> }
                        </form>
                        {/*<SimpleModalWrapped />*/}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Register;
