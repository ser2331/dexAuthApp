import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './components/core/store';
import { App } from './components/modules/app/components/App/App';

import 'antd/dist/antd.css';
import './components/assets/styles/index.scss';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
