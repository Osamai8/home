import { combineReducers } from 'redux';
import { gamesReducer, detailReducer } from './Reducers'

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
});
export default rootReducer;