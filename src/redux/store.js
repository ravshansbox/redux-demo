import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './slices/todosSlice';
import { visibilityFilterSlice } from './slices/visibilityFilterSlice';

export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
    [visibilityFilterSlice.name]: visibilityFilterSlice.reducer,
  },
});
