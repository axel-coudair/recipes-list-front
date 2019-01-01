import React, { Component } from 'react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Collapse from "@material-ui/core/Collapse/Collapse";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MenuRecipe from '../menuRecipe'
import "./style.css";

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
});

class CardRecipes extends Component {
    state = {
        expanded: false,
			ingredientExpanded: false
    };

	handleExpandClick = name => {
		console.log(name)
		this.setState({ [name]: !this.state[name]});
	};

    render() {
        const {
            recipe,
            classes
        } = this.props;

        return (
            <Card className="cardRecipes">
                <CardHeader
                    action={
                        <MenuRecipe recipe={recipe}/>
                    }
                    title={recipe.title}
                    subheader={new Date(recipe.date).toDateString()}
                />
                <CardMedia
                    className={classes.media}
                    image={recipe.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography component="p">
                        {recipe.description}
                    </Typography>
                </CardContent>
                <CardActions
                    // className={classes.actions}
                    disableActionSpacing>
                    {/*<IconButton aria-label="Add to favorites">*/}
                        {/*<FavoriteIcon />*/}
                    {/*</IconButton>*/}
                    {/*<IconButton aria-label="Share">*/}
                        {/*<ShareIcon />*/}
                    {/*</IconButton>*/}
									<IconButton
                    // className={classnames(classes.expand, {
                    //     [classes.expandOpen]: this.state.expanded,
                    // })}
										onClick={() => this.handleExpandClick("expanded")}
										name="expanded"
										aria-expanded={this.state.expanded}
										aria-label="Show more"
									>
										<ExpandMoreIcon color='inherit' />
									</IconButton>
									<IconButton
                    // className={classnames(classes.expand, {
                    //     [classes.expandOpen]: this.state.expanded,
                    // })}
										onClick={() => this.handleExpandClick("ingredientExpanded")}
                    name="ingredientExpanded"
										aria-expanded={this.state.ingredientExpanded}
										aria-label="Show more"
									>
										<ExpandMoreIcon />
									</IconButton>
                </CardActions>
							<Collapse in={this.state.ingredientExpanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography paragraph variant="subtitle1">Ingredients:</Typography>
									{recipe.ingredients.map((ingredient, i) =>
                    <>
											<Typography paragraph key={i}>
												{ingredient.quantity+ " "}
												{ingredient.unit+ " "}
												{ingredient.name+ " "}
											</Typography>
                    </>
									)}
								</CardContent>
							</Collapse>
							<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography paragraph variant="subtitle1">Etape:</Typography>
									{recipe.stapes.map((stape, i) =>
                    <>
											<Typography paragraph variant="subtitle2" key={i}>
												{i + 1}
											</Typography>
											<Typography paragraph key={i}>
												{stape}
											</Typography>
                    </>
									)}
								</CardContent>
							</Collapse>
            </Card>
        );
    }
}

export default withStyles(styles)(CardRecipes);