import jwtDecode from 'jwt-decode'

export const getIdCurrentUser = () => {
	var userData = jwtDecode(localStorage.getItem('user'))
	return userData._id
}
export const headers = {
	headers: { Authorization: `JWT ${localStorage.getItem('user')}` }
}
