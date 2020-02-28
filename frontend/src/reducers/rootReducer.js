import { combineReducers } from 'redux'
import usernameReducer from './usernameReducer'
import scoreReducer from './scoreReducer'
import clickReducer from './clickReducer'

export default combineReducers({ username: usernameReducer, score: scoreReducer, allClicks: clickReducer })