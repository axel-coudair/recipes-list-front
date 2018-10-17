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
    email: '',
    password: '',
    error: null,
};

class Login extends Component {
    state = {
        open: false,
        pseudo: "",
        password: ""
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                console.log("happy");
                // history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {

        const {
            email,
            password,
            error,
        } = this.state;

        return (
            <div>
                {/*<Typography gutterBottom>Click to get the full Modal experience!</Typography>*/}
                <Button onClick={this.handleOpen}>Login</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                ><div
                    style={{position: "absolute",
                        width:  500,
                        backgroundColor: "#FF0"}}>
                    {/*className={classes.paper}>*/}
                    <Typography variant="h6" id="modal-title">
                        Register
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <form onSubmit={this.onSubmit}>
                        <TextField
                            id="standard-name"
                            label="email"
                            // className={classes.textField}
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            margin="normal"
                        />
                        <TextField
                            id="standard-uncontrolled"
                            label="Password"
                            value={password}
                            type="password"
                            // className={classes.textField}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            margin="normal"
                        />
                        <input type="submit" value="Submit" />

                        { error && <p>{error.message}</p> }
                    </form>
                </div>
                </Modal>
            </div>
        );
    }
}

export default Login;
