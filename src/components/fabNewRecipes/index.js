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
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from "@material-ui/core/Grid/Grid";

import Ingredient from '../../models/Ingredient'
import IngredientSelector from '../ingredientSelector'
import { postRecipeAction } from "../../actions/recipesActions"
import { connect } from "react-redux"
import Recipe from '../../models/Recipe';

const styles = theme => ({
    fabsGrid: {
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    fabsGridNewRecipe: {
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        position: 'fixed',
    },
    hideArraysTitles: {
        display: "none"
    }
});

class FabNewRecipes extends Component {
    state = new Recipe()

    addIngredient = () => {
        this.setState({ ingredients: [...this.state.ingredients, new Ingredient(null, "", null, "", false)] });
    };

    addStape = () => {
        this.setState({ stapes: [...this.state.stapes, ""] });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState(new Recipe())
        this.setState({ open: false });
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleChange2 = key => event => {
        const name = event.target.name
        const value = event.target.value
        this.setState(prevState => {
            prevState[name][key] = value;
            return prevState
        });
    };

    handleCheckChange = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    myCallback = (dataFromChild, key) => {
        this.setState(prevState => {
            prevState.ingredients[key] = dataFromChild;
            return prevState
        });
    }

    handleSubmit = (event) => {
        this.props.postRecipeAction(this.state);
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid container justify="center" className={classes.fabsGridNewRecipe} >
                    <Grid item>
                        <Fab color="primary" variant="extended" aria-label="Add" onClick={this.handleOpen}>
                            <AddIcon />
                            ADD NEW RECIPE
                        </Fab>
                    </Grid>
                </Grid>
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
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                            <FormControl
                                autoFocus
                                margin="dense"
                                fullWidth>
                                <InputLabel htmlFor="numberOfEatersId">Nombre de Personnes</InputLabel>
                                <Select
                                    name="numberOfEaters"
                                    value={this.state.numberOfEaters}
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
                                value={this.state.description}
                                name="description"
                                multiline
                                onChange={this.handleChange}
                                margin="normal"
                            />
                            <TextField
                                label="Image url"
                                className="modal-form-style"
                                value={this.state.image}
                                name="image"
                                onChange={this.handleChange}
                                margin="normal"
                            />
                            <TextField
                                label="Duration"
                                className="modal-form-style"
                                value={this.state.duration}
                                name="duration"
                                onChange={this.handleChange}
                                type="number"
                                margin="normal"
                            />
                            <Typography id="modal-title" margin="normal" variant="h6" className={this.state.stapes.length ? "" : classes.hideArraysTitles}>
                                Étapes
                            </Typography>

                            {this.state.stapes.map((stape, i) =>

                                <TextField
                                    label={"Étape: " + (i + 1)}
                                    key={i}
                                    className="modal-form-style"
                                    value={stape}
                                    name="stapes"
                                    multiline
                                    onChange={this.handleChange2(i)}
                                    margin="normal"
                                />
                            )}

                            <Grid container justify="center" className={classes.fabsGrid}>
                                <Grid item>
                                    <Fab color="primary" variant="extended" className="modal-form-style" aria-label="Add" onClick={this.addStape}>
                                        <AddIcon />
                                        NOUVELLE ÉTAPE
                                    </Fab>
                                </Grid>
                            </Grid>

                            <Typography id="modal-title" margin="normal" variant="h6" className={this.state.ingredients.length ? "" : classes.hideArraysTitles}>
                                Ingredients
                            </Typography>

                            {this.state.ingredients.map((ingredient, i) =>
                                <IngredientSelector
                                    callbackFromParent={this.myCallback}
                                    ingredient={ingredient}
                                    name="ingredients"
                                    key={i}
                                    number={i}
                                />
                            )}

                            <Grid container justify="center" className={classes.fabsGrid}>
                                <Grid item>
                                    <Fab color="primary" variant="extended" className="modal-form-style" aria-label="Add" onClick={this.addIngredient}>
                                        <AddIcon />
                                        ADD NEW INGREDIENT
                                    </Fab>
                                </Grid>
                            </Grid>
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
                                                checked={this.state.isPublic}
                                                name="isPublic"
                                                onChange={this.handleCheckChange}
                                                color="primary"
                                            />
                                        }
                                    />
                                </Grid>
                            </Grid>
                            {this.state.error && <p>{this.state.error.message}</p>}
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