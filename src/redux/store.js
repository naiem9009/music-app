import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { shazamAPI } from './services/shazamAPI';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamAPI.reducerPath]:shazamAPI.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamAPI.middleware),
});
