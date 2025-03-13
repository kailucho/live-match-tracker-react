// Basic Redux store setup
import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from '../features/matches/matchesSlice';

export const store = configureStore({
  reducer: {
    matches: matchesReducer,
  },
});

