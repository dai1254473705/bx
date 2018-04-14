/*!
 *
 * redux
 */

/*
 * import store
 */
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducer from './reducer/index';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  // install saga run
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
