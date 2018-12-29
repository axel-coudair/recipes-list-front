import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';

class IngredientSelector extends Component {

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    state = this.props.ingredient

    render() {
        console.log(this.props)
        this.props.callbackFromParent(this.state, this.props.number);

        const {
            name,
            unit,
            quantity,
        } = this.state;

        return (
            <>
                <Divider variant="middle" />
                <Grid
                    container
                    direction="row"
                    margin="normal"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item md={4} >
                        <TextField
                            label="Nom"
                            className="modal-form-style"
                            value={name}
                            name="name"
                            onChange={this.handleChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid
                        item md={4}
                    >
                        <TextField
                            label="Unité"
                            className="modal-form-style"
                            value={unit}
                            name="unit"
                            onChange={this.handleChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid
                        item md={3}
                    >
                        <FormControl
                            autoFocus
                            margin="normal"
                            fullWidth>
                            <InputLabel htmlFor="numberOfEatersId">Quantité</InputLabel>
                            <Select
                                value={quantity}
                                name="quantity"
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'quantity',
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
        );
    }
}

export default IngredientSelector;
