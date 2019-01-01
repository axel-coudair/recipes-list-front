import React, { Component } from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { deleteRecipe } from '../../services/recipes'
import { getRecipesAction } from '../../actions/recipesActions'
import connect from 'react-redux/es/connect/connect'
import ModalEditRecipe from '../modalEditRecipe'

class MenuRecipe extends Component {
	state = {
		anchorEl: null
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	delete = () => {
		deleteRecipe(this.props.recipe.id)
		this.props.getRecipes()
	}

	render() {
		const { anchorEl } = this.state

		return (
			<>
				<IconButton
					aria-owns={anchorEl ? 'simple-menu' : undefined}
					aria-haspopup="true"
					onClick={this.handleClick}>
					<MoreVertIcon />
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}>
					<MenuItem onClick={this.delete}>Delete</MenuItem>
					<ModalEditRecipe recipe={this.props.recipe} />
				</Menu>
			</>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	getRecipes: () => {
		dispatch(getRecipesAction())
	}
})

export default connect(
	null,
	mapDispatchToProps
)(MenuRecipe)
