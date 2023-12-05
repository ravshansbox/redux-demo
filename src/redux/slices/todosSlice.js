import { createSlice } from '@reduxjs/toolkit';
import { visibilityFilterSlice } from './visibilityFilterSlice';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, description: 'Buy milk' },
    { id: 2, description: 'Feed the dog' },
    { id: 3, description: 'Visit office' },
  ],
  reducers: {
    addTodo: (state, { payload }) => {
      const id = Math.max(...state.map((todo) => todo.id).concat(0)) + 1;
      state.push({ ...payload, completed: false, id });
    },
    markComplete: (state, { payload }) => {
      const todo = state.find((todo) => todo.id === payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      visibilityFilterSlice.actions.toggleVisibility.type,
      (state, action) => {
        console.log(state, action);
        return state;
      }
    );
  },
});
