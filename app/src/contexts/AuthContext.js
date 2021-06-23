import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext({
  token: null,
  isAuth: () => false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const handleIsAuth = async () => {
    const token = await AsyncStorage.getItem('@app/token');

    if (token) {
      setToken(token);

      return true;
    }

    setToken(null);
    return false;
  };

  const handleLogin = async (token) => {
    await AsyncStorage.setItem('@app/token', token);
    setToken(token);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@app/token');
    setToken(null);
  };

  const contextValues = {
    token,
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
