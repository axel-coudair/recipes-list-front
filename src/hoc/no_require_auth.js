import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
	class NotAuthentication extends Component {
		componentWillMount() {
			if (this.props.authenticated) {
				this.props.history.push('/recipes')
			}
		}

		componentWillUpdate(nextProps) {
			if (nextProps.authenticated) {
				this.props.history.push('/recipes')
			}
		}

		PropTypes = {
			router: PropTypes.object
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps(state) {
		return { authenticated: state.usersReducer.authenticated }
	}

	return connect(mapStateToProps)(NotAuthentication)
}
