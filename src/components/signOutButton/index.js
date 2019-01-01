import React, { Component } from 'react'
import Button from '@material-ui/core/Button/Button'
import { signOutAction } from '../../actions/usersActions'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'

class SignOutButton extends Component {
	render() {
		return (
			<Typography type="button" onClick={this.props.signOutAction}>
				Sign Out
			</Typography>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signOutAction: () => {
			dispatch(signOutAction())
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(SignOutButton)
