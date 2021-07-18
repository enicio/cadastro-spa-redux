import { configureStore } from '@reduxjs/toolkit';
import counterStorage from '../redux/features/cadastreSlice';

export const store = configureStore({
  reducer: {counterStorage},
})