import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from '../features/cocktailsDrink/cocktailsSlice';

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});
