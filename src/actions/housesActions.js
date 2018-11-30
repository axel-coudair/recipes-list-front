import { GETHOUSES } from './types'

export const getHouses = houses => {
	return {
		type: GETHOUSES,
		payload: houses
	}
}
