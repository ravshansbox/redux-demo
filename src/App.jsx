import { TodoList } from './TodoList.jsx';
import { TodoItemForm } from './TodoItemForm.jsx';
import { useSelector } from 'react-redux';

export const App = () => {
  const count = useSelector((state) => state.todos.length);

  return (
    <main>
      <h1>Todos ({count})</h1>
      <TodoList />
      <TodoItemForm />
    </main>
  );
};
