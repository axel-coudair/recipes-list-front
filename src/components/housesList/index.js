import React, { Component } from 'react';
import CardRecipes from "../cardRecipes";
import Grid from "@material-ui/core/Grid/Grid";
import "./style.css"
import Card from "@material-ui/core/Card/Card";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getHouses } from "../../services/houses";

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class HousesList extends Component {

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
    componentDidMount(){
        getHouses()
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            this.setState(byPropKey('error', error.response.data));
        });
    }
    

    render() {
        return (
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
                    <List className="homeList">
                        <ListItem button>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        );
    }
}

export default HousesList;
