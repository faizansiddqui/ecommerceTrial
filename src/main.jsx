import React from 'react';
import { createRoot } from 'react-dom/client'; // Change here
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Use createRoot instead

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
