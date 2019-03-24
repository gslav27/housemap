import { combineReducers } from 'redux';
import housesReducer from './houses/housesReducer';


export default combineReducers({ houses: housesReducer });
