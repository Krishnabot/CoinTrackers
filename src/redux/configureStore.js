import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coinsReducer from './Coins/Coins';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
