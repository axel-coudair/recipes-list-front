
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import recipesReducer from './recipesReducer'
import housesReducer from './housesReducer'

export default combineReducers({
    usersReducer,
    recipesReducer,
    housesReducer
})


