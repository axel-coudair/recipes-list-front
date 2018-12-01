import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import "./style.css"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from "react-redux"
import { getHousesAction } from '../../actions/housesActions';

class HousesList extends Component {
    componentDidMount() {
        this.props.getHousesAction();
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

                        {this.props.houses.map((house, i) =>
                            <ListItem button key={i}>
                                <ListItemText primary={house.name} />
                            </ListItem>
                        )}
                    </List>
                </Grid>
            </Grid>
        );
    }
}
const mapStateToProps = (state) => ({
    houses: state.housesReducer
})

const mapDispatchToProps = dispatch => ({
    getHousesAction: () => {
        dispatch(getHousesAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HousesList)