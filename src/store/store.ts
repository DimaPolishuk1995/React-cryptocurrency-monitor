import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import initialState from './initialState';
import rootReducer from './root.reducer';
import sagas from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);
  const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore<initialState>(
    rootReducer,
    composeEnhancers(middleware)
  );
  sagaMiddleware.run(sagas);

  return store;
}
