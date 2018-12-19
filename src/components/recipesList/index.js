import React, { Component } from 'react';
import CardRecipes from "../cardRecipes";
import FabNewRecipes from "../fabNewRecipes";
import Grid from "@material-ui/core/Grid/Grid";
import "./style.css"
import { connect } from "react-redux"
import { getRecipesAction } from "../../actions/recipesActions"
import { LIST_RECIPES } from "../../actions/types"
import Recipe from '../../models/Recipe';

class RecipesList extends Component {
    createRecipes(recipes) {
        let recipesObjects = []
        recipes.map(({ title, number }) => {
            recipesObjects.push(new Recipe(null, null, title, number, "jkhkjhkjf jshjk", false, null))
        })
        return recipesObjects
    }

    componentDidMount() {
        this.props.getRecipes()
    }

    render() {
        return (
            < div className="recipesList">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid
                        container
                        item md={9}
                    >
                        {this.props.recipes.map((recipe, i) =>
                            <Grid item md={4} sm={6} key={i}>
                                <CardRecipes recipe={recipe} key={i} />
                            </Grid>
                        )}
                        <FabNewRecipes />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipesReducer
})

const mapDispatchToProps = dispatch => ({
    getRecipes: () => {
        dispatch(getRecipesAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList)
