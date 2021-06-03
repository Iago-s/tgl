import React from 'react';
import ReactDOM from 'react-dom';

import AuthContextProvider from './contexts/AuthContext';

import App from './App';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <GlobalStyle />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
