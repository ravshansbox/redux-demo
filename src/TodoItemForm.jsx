import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosSlice } from './redux/slices/todosSlice';

export const TodoItemForm = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(todosSlice.actions.addTodo({ description }));
        setDescription('');
      }}
    >
      <input
        type="text"
        value={description}
        onChange={(event) => {
          setDescription(event.currentTarget.value);
        }}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
