import { configureStore } from '@reduxjs/toolkit';
import registersStorage from '../redux/features/cadastreSlice';

export const store = configureStore({
  reducer: {registersStorage},
})