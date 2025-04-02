import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import './index.css';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/MoneyGuard">
      <Provider store={store}>
       <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
