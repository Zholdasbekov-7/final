import { configureStore } from '@reduxjs/toolkit';
import citySlice from './globalReduces';

export const store = configureStore({
  reducer: {
      global: citySlice,
  },
});

