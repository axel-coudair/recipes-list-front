import React, { Component } from 'react'
import Button from '@material-ui/core/Button/Button'
import TextField from '@material-ui/core/TextField/TextField'

import './style.css'
import { connect } from 'react-redux'
import { loginAction } from '../../actions/usersActions'
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent/DialogContent'
import Dialog from '@material-ui/core/Dialog/Dialog'

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value
})

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null
}

class Login extends Component {
	state = {
		...INITIAL_STATE
	}

	handleOpen = () => {
		this.setState({ open: true })
	}

	handleClose = () => {
		this.setState({ open: false })
	}

	onSubmit = event => {
		const { email, password } = this.state
		event.preventDefault()

		this.props.loginAction({ email, password })
	}

	errorMessage() {
		if (this.props.errorMessage) {
			return <div className="info-red">{this.props.errorMessage}</div>
		}
	}

	render() {
		const { email, password, error } = this.state

		return (
			<>
				<Button onClick={this.handleOpen} color="inherit">
					Login
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Login</DialogTitle>
					<DialogContent>
						<form onSubmit={this.onSubmit}>
							<TextField
								id="standard-name"
								label="Email"
								// className={classes.textField}
								value={email}
								onChange={event =>
									this.setState(byPropKey('email', event.target.value))
								}
								margin="normal"
								className="modal-form-style"
							/>
							<TextField
								id="standard-uncontrolled"
								label="Password"
								value={password}
								type="password"
								className="modal-form-style"
								onChange={event =>
									this.setState(byPropKey('password', event.target.value))
								}
								margin="normal"
							/>
							<Button
								variant="contained"
								className="modal-form-style"
								color="primary"
								type="submit"
								value="Submit">
								Submit
							</Button>
							{error && <p>{error.message}</p>}
							{this.errorMessage()}
						</form>
					</DialogContent>
				</Dialog>
			</>
		)
	}
}

const mapStateToProps = state => ({
	errorMessage: state.usersReducer.error
})

const mapDispatchToProps = dispatch => ({
	loginAction: loginData => {
		dispatch(loginAction(loginData))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
