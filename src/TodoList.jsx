import { useDispatch, useSelector } from 'react-redux';
import { todosSlice } from './redux/slices/todosSlice';
import { visibilityFilterSlice } from './redux/slices/visibilityFilterSlice';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : undefined,
          }}
          onClick={() => {
            dispatch(todosSlice.actions.markComplete(todo.id));
          }}
        >
          {todo.description}
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            dispatch(visibilityFilterSlice.actions.toggleVisibility('done'));
          }}
        >
          Toggle visibility
        </button>
      </li>
    </ul>
  );
};
