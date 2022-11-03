import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeView from './views/Home.view';

import { Provider } from 'react-redux'
import { store } from './app/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <HomeView />
  </Provider>
);

