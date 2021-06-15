import React from 'react';

export const AuthContext = React.createContext({
  isAuth: () => {},
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const handleIsAuth = () => {
    const token = localStorage.getItem('@app/token');

    if (token) {
      return true;
    }

    return false;
  };

  const handleLogin = (token) => {
    localStorage.setItem('@app/token', token);
  };

  const handleLogout = () => {
    localStorage.removeItem('@app/token');
  };

  const contextValues = {
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
