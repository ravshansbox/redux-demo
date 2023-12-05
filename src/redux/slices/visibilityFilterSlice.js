import { createSlice } from '@reduxjs/toolkit';

export const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState: 'all',
  reducers: {
    toggleVisibility: (_state, { payload }) => payload,
  },
});
