import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Modal from "@material-ui/core/Modal/Modal";
import TextField from "@material-ui/core/TextField/TextField";
import { login } from '../../services/auth';
import "./style.css"

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
        ...INITIAL_STATE
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
        event.preventDefault();

        login(email, password)
            .then(result => {
                this.setState({ ...INITIAL_STATE });
                console.log("result");
                console.log(result);
                // history.push("/");
            })
            .catch((error) => {
                this.setState(byPropKey('error', error.response.data));
            });
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
                >
                <div className="modal-style" >
                    <Typography variant="h6" id="modal-title">
                        Login
                    </Typography>
                    {/* <Typography variant="subtitle1" id="simple-modal-description">
                        Fill it with your credentiels
                    </Typography> */}
                    <form onSubmit={this.onSubmit}>
                        <TextField
                            id="standard-name"
                            label="Email"
                            // className={classes.textField}
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            margin="normal"
                            className="modal-form-style"
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
                        <Button variant="contained" color="primary" type="submit" value="Submit">
                            Submit
                        </Button>
                        { error && <p>{error.message}</p> }
                    </form>
                </div>
                </Modal>
            </div>
        );
    }
}

export default Login;
