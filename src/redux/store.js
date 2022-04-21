import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     promise,
//     logger, // logger must be bellow
//   ),
// );

// export default store;
export default () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      promise,
      logger, // logger must be bellow
    ),
  );
  const persistStor = persistStore(store);

  return { store, persistStor };
};
