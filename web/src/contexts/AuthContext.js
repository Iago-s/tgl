import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  isAuth: () => {},
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleIsAuth = () => {
    const token = localStorage.getItem('@app/token');

    if (token) {
      setIsLoggedIn(true);
      return true;
    }

    setIsLoggedIn(false);
    return false;
  };

  const handleLogin = (token) => {
    localStorage.setItem('@app/token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('@app/token');
    setIsLoggedIn(false);
  };

  const contextValues = {
    isLoggedIn,
    isAuth: handleIsAuth,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
