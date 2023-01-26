import { combineReducers } from 'redux'
import userReducer from './userReducer'
import calcReducer from './calcReducer'

export default combineReducers({
  usersList: userReducer,
  calc: calcReducer
})