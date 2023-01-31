import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { loadState } from './cachedStore';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
  preloadedState: loadState(),
});

export default store;