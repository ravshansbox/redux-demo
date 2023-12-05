import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './redux/store';

createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
