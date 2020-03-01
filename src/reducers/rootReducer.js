import { combineReducers } from 'redux';

import listReducer from './listReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
	reposList: listReducer,
	usersList: searchReducer
});

export default rootReducer;