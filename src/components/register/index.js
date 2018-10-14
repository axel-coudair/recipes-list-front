import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Modal from "@material-ui/core/Modal/Modal";
import TextField from "@material-ui/core/TextField/TextField";

// import './App.css';

class Register extends Component {
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
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleSubmit = () =>{
        console.log(this.state);
    }


    render() {
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
                    <div
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
                        <form onSubmit={this.handleSubmit}>
                        <TextField
                            id="standard-name"
                            label="Name"
                            // className={classes.textField}
                            value={this.state.pseudo}
                            onChange={this.handleChange('pseudo')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-uncontrolled"
                            label="Password"
                            value={this.state.password}
                            type="password"
                            // className={classes.textField}
                            onChange={this.handleChange('password')}
                            margin="normal"
                        />
                            <input type="submit" value="Submit" />
                        </form>
                        {/*<SimpleModalWrapped />*/}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Register;
