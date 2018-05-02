import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initialState'
import rootReducer from './root.reducer';

// Create store and enhance with middleware
const composeEnhancers = (
    process.env.NODE_ENV === 'development' &&
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;
export const store = createStore<initialState>(rootReducer, composeEnhancers(applyMiddleware(thunk)));
