import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Context } from './Context';
import { Provider } from 'react-redux';
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Context> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </Context> */}
  </React.StrictMode>
);