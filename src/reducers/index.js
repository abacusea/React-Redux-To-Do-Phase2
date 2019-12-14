import { combineReducers } from 'redux'
import todos from './todoReducer'

const todoApp = combineReducers({todos});

export default todoApp;


{/*	Create a reducer for combining todoReducer & filterReducer	*/}