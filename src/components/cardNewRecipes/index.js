import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Modal from "@material-ui/core/Modal/Modal";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField/TextField";
import "./style.css";
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

class CardRecipes extends Component {
    state = {
        ...INITIAL_STATE
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

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
                {/* <Card className="cardRecipes">
                    <CardMedia
                        // className={classes.media}
                        image="/static/images/cards/paella.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography component="p" className="addIcon" >
                            +
                    </Typography>
                    </CardContent>
                </Card> */}

                <Fab color="primary" aria-label="Add" onClick={this.handleOpen}>
                    <AddIcon />
                </Fab>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className="modal-style" >
                        <Typography variant="h6" id="modal-title">
                            Create new recipe
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
                            <Button variant="contained" color="primary" type="submit" value="Submit">
                                Submit
                </Button>

                            {error && <p>{error.message}</p>}
                        </form>
                        {/*<SimpleModalWrapped />*/}
                    </div>
                </Modal>
            </>
        );
    }
}

export default CardRecipes;
