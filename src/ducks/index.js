import { combineReducers } from 'redux';
import favorites from './favorites';
import albums from './albums';

export default combineReducers({
    favorites,
    albums
});