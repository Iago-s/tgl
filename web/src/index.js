import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AuthContextProvider from './contexts/AuthContext';
import store from './store';

import App from './App';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <App />
        <GlobalStyle />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
