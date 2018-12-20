import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Modal from "@material-ui/core/Modal/Modal";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField/TextField";
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';

import Ingredient from '../../models/Ingredient'

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    userId: "",
    title: "",
    numberOfEaters: null,
    description: "",
    isPublic: "",
    ingredients: [],
    error: null
};
const styles = theme => ({
    fabNewRecipe: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    hideIngredient: {
        display: "none"
    }
});

class FabNewRecipes extends Component {
    state = {
        ...INITIAL_STATE
    };

    addIngredient = () => {
        this.setState({ ingredients: [...this.state.ingredients, new Ingredient()] });
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
                <Fab color="primary" variant="extended" className={classes.fabNewRecipe} aria-label="Add" onClick={this.handleOpen}>
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
                        <Typography variant="h5" id="modal-title">
                            Create new recipe
                        </Typography>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                label="Title"
                                className="modal-form-style"
                                value={title}
                                onChange={event => this.setState(byPropKey('title', event.target.value))}
                                margin="normal"
                            />
                            <FormControl margin="normal" className={classes.formControl + " modal-form-style"}>
                                <InputLabel htmlFor="numberOfEatersId">Nombre de Personnes</InputLabel>
                                <Select
                                    value={numberOfEaters}
                                    onChange={event => this.setState(byPropKey('numberOfEaters', event.target.value))}
                                    inputProps={{
                                        name: 'age',
                                        id: 'numberOfEatersId',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label="Description"
                                className="modal-form-style"
                                value={description}
                                onChange={event => this.setState(byPropKey('description', event.target.value))}
                                margin="normal"
                            />
                            {}
                            <Typography id="modal-title" margin="normal" variant="h6" className={ingredients.length ? "" : classes.hideIngredient}>
                                Ingredients
                            </Typography>

                            {ingredients.map((ingredient, i) =>
                                <>
                                    <Divider variant="middle" />
                                    <Grid
                                        container
                                        direction="row"
                                        margin="normal"
                                        justify="center"
                                        alignItems="flex-start"
                                    >
                                        <Grid
                                            item md={4}
                                        >
                                            <TextField
                                                label="Nom"
                                                className="modal-form-style"
                                                value={ingredient.name}
                                                onChange={event => this.setState(byPropKey('ingredient.name', event.target.value))}
                                                margin="normal"
                                                key={i}
                                            />
                                        </Grid>
                                        <Grid
                                            item md={4}
                                        >
                                            <TextField
                                                label="Unité"
                                                className="modal-form-style"
                                                value={ingredient.name}
                                                onChange={event => this.setState(byPropKey('ingredient.unit', event.target.value))}
                                                margin="normal"
                                                key={i}
                                            />
                                        </Grid>
                                        <Grid
                                            item md={3}
                                        >
                                            <FormControl margin="normal" className={classes.formControl + " modal-form-style"}>
                                                <InputLabel htmlFor="numberOfEatersId">Quantité</InputLabel>
                                                <Select
                                                    value={ingredient.quantity}
                                                    inputProps={{
                                                        name: 'age',
                                                        id: 'numberOfEatersId',
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </>
                            )}

                            <Fab color="primary" variant="extended" className={classes.fab} aria-label="Add" onClick={this.addIngredient}>
                                <AddIcon />
                                ADD NEW INGREDIENT
                            </Fab>

                            <Fab color="primary" variant="extended" className="modal-form-style" aria-label="Add" onClick={this.addIngredient}>
                                <AddIcon />
                                Submit
</Fab>
                            {/* <Button variant="contained" className="modal-form-style" color="primary" type="submit" value="Submit">
                                Submit
                            </Button> */}

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
