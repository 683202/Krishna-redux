import FirstReducer from './FirstReducer';
import SecondReducer from './SecondReducer';

import {combineReducers} from 'redux';

var indexReducer = combineReducers({
    first: FirstReducer,
    second: SecondReducer
});

export default indexReducer;