import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import initialState from "./initialState";

const rootReducer = combineReducers<initialState>({
  router: routerReducer
});

export default rootReducer;
