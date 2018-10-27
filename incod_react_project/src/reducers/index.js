import {combineReducers} from 'redux';
import clientReducers from './Client';
import Active from './Active';
const allReducers = combineReducers({
    client: clientReducers,
    active: Active
});

export default allReducers;