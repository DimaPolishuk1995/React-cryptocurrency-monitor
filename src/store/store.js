import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root.reducer';
import sagas from './sagas';
import { initialState } from './initialState';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middleware)
  );

  sagaMiddleware.run(sagas);

  return store;
}
