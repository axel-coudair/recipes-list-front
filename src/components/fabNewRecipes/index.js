import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField/TextField";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from "@material-ui/core/Grid/Grid";

import Ingredient from '../../models/Ingredient'
import IngredientSelector from '../ingredientSelector'
import Recipe from '../../models/Recipe';
import { postRecipeAction } from "../../actions/recipesActions"
import { connect } from "react-redux"

const INITIAL_STATE = {
    userId: "",
    title: "",
    numberOfEaters: "",
    description: "",
    isPublic: false,
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
        this.setState({ ingredients: [...this.state.ingredients, new Ingredient(null, "", null, "", false)] });
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

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleCheckChange = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    myCallback = (dataFromChild, key) => {
        this.state.ingredients[key] = dataFromChild
    }

    handleSubmit = (event) => {
        const {
            title,
            numberOfEaters,
            description,
            isPublic,
            ingredients
        } = this.state;

        this.props.postRecipeAction({
            title,
            numberOfEaters,
            description,
            isPublic,
            ingredients
        });
        event.preventDefault();
    }

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
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create new recipe</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                        </DialogContentText> */}

                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                label="Title"
                                name="title"
                                autoFocus
                                margin="dense"
                                fullWidth
                                value={title}
                                onChange={this.handleChange}
                            />
                            <FormControl
                                autoFocus
                                margin="dense"
                                fullWidth>
                                <InputLabel htmlFor="numberOfEatersId">Nombre de Personnes</InputLabel>
                                <Select
                                    name="numberOfEaters"
                                    value={numberOfEaters}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'numberOfEaters',
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
                                name="description"
                                onChange={this.handleChange}
                                margin="normal"
                            />
                            {}
                            <Typography id="modal-title" margin="normal" variant="h6" className={ingredients.length ? "" : classes.hideIngredient}>
                                Ingredients
                            </Typography>

                            {ingredients.map((ingredient, i) =>
                                <IngredientSelector
                                    callbackFromParent={this.myCallback}
                                    ingredient={ingredient}
                                    key={i}
                                    number={i}
                                />
                            )}

                            <Fab color="primary" variant="extended" className="modal-form-style" aria-label="Add" onClick={this.addIngredient}>
                                <AddIcon />
                                ADD NEW INGREDIENT
                            </Fab>
                            <Grid
                                container
                                direction="row"
                                margin="normal"
                                justify="center"
                                alignItems="flex-start"
                            >
                                <Grid
                                    item md={12}
                                >
                                    <FormControlLabel
                                        label="Do you want to make your recipe public ?"
                                        control={
                                            <Switch
                                                checked={isPublic}
                                                name="isPublic"
                                                onChange={this.handleCheckChange}
                                                color="primary"
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid>
                            {error && <p>{error.message}</p>}
                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} type="submit" value="Submit" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postRecipeAction: (recipe) => {
        dispatch(postRecipeAction(recipe));
    }
})

export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(FabNewRecipes));