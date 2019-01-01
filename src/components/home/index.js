import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import './style.css'
import { Typography } from '@material-ui/core'

class Home extends Component {
	render() {
		return (
			<div className="recipesList">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="flex-start">
					<Grid container item md={9}>
						<Typography>Welcome in My recipes List </Typography>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default Home
