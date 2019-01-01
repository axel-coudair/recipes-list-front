import { GETHOUSES } from './types'
import { getHouses } from '../services/houses'
import House from '../models/House'

const createHouses = houses => {
	let housesObjects = []
	houses.map(({ id, adminId, users, name }) => {
		housesObjects.push(new House(id, adminId, users, name))
	})
	return housesObjects
}

export const getHousesAction = houses => {
	return async dispatch => {
		try {
			const res = await getHouses()
			dispatch({ type: GETHOUSES, payload: createHouses(res.data.houses) })
		} catch (error) {
			console.log(error)
		}
	}
}
