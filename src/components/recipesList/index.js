import React, { Component } from 'react';
import CardRecipes from "../cardRecipes";
import Grid from "@material-ui/core/Grid/Grid";
import "./style.css"
import Card from "@material-ui/core/Card/Card";
import { connect } from "react-redux"
import { addRecipe } from "../../actions/recipesActions"
import { LIST_RECIPES } from "../../actions/types"
import Recipe from '../../models/Recipe';

class RecipesList extends Component {
    recipes = [
        {
            title: "Rizzoto",
            image: "https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"
        },
        {
            title: "Carbo",
            image: "https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"
        },
        {
            title: "Pates",
            image: "https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"
        },
        {
            title: "Pates",
            image: "https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"
        },
        {
            title: "Pates",
            image: "https://f.wszelkieprzepisy.pl/images/ywoj5xrm/rizotto-miesno-warzywne-orig.png"
        },
    ]

    createRecipes(recipes) {
        let recipesObjects = []
        recipes.map(({ title, number }) => {
            recipesObjects.push(new Recipe(null, null, title, number, "jkhkjhkjf jshjk", false, null))
        })
        return recipesObjects
    }

    componentDidMount() {
        this.props.dispatch({
            type: LIST_RECIPES, payload: this.createRecipes(this.recipes)
        })
    }

    render() {
        addRecipe(this.recipes)
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
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipesReducer
})

// const mapDispatchToProps = dispatch => {
// return {
//     addRecipe: recipe => {
//         dispatch(addRecipe(recipe));
//     }
// }
// }

export default connect(mapStateToProps)(RecipesList)
