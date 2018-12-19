import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Modal from "@material-ui/core/Modal/Modal";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField/TextField";
import { withStyles } from '@material-ui/core/styles';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});
const INITIAL_STATE = {
    userId: "",
    title: "",
    numberOfEaters: 0,
    description: "",
    isPublic: "",
    ingredients: "",
    error: null
};
const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class FabNewRecipes extends Component {
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

        const { classes } = this.props;
        const {
            title,
            numberOfEaters,
            description,
            isPublic,
            ingredients,
            error
        } = this.state;

        return (
            <>
                <Fab color="primary" variant="extended" className={classes.fab} aria-label="Add" onClick={this.handleOpen}>
                    <AddIcon />
                    ADD NEW RECIPE
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
                                label="title"
                                className="modal-form-style"
                                value={title}
                                onChange={event => this.setState(byPropKey('title', event.target.value))}
                                margin="normal"
                            />
                            <TextField
                                label="description"
                                className="modal-form-style"
                                value={description}
                                onChange={event => this.setState(byPropKey('description', event.target.value))}
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

export default withStyles(styles, { withTheme: true })(FabNewRecipes);
