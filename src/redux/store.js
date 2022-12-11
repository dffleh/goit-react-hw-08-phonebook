import { configureStore } from '@reduxjs/toolkit';
import { contactRedusers, filterReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactRedusers,
    filter: filterReducer,
  },
});
