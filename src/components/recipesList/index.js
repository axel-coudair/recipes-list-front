import React, {Component} from 'react';
import CardRecipes from "../cardRecipes";
import Grid from "@material-ui/core/Grid/Grid";
import "./style.css"
import Card from "@material-ui/core/Card/Card";

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
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        item md={9}
                    >
                        {/*<Grid item md={4} sm={6}>*/}
                        {/*<Card className="cardRecipes">*/}
                        {/*+*/}
                        {/*</Card>*/}

                        {/*</Grid>*/}
                        {this.recipes.map((recipe, i) =>

                            <Grid item md={4} sm={6} key={i}>

                                <CardRecipes recipe={recipe} key={i}/>

                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default RecipesList;