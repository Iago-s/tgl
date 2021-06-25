import React from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import AuthContextProvider from './src/contexts/AuthContext';
import store from './src/store';

import Routes from './routes';

const App = () => {
  let [fontsLoaded] = useFonts({
    'HelveticaNeueBd': require('./assets/fonts/HelveticaNeueBd.ttf'),
    'HelveticaNeueBlackCond': require('./assets/fonts/HelveticaNeueBlackCond.ttf'),
    'HelveticaNeueBold': require('./assets/fonts/HelveticaNeueBold.ttf'),
    'HelveticaNeueHv': require('./assets/fonts/HelveticaNeueHv.ttf'),
    'HelveticaNeueIt': require('./assets/fonts/HelveticaNeueIt.ttf'),
    'HelveticaNeueLight': require('./assets/fonts/HelveticaNeueLight.ttf'),
    'HelveticaNeueLt': require('./assets/fonts/HelveticaNeueLt.ttf'),
    'HelveticaNeueMed': require('./assets/fonts/HelveticaNeueMed.ttf'),
    'HelveticaNeueMedium': require('./assets/fonts/HelveticaNeueMedium.ttf'),
    'HelveticaNeueThin': require('./assets/fonts/HelveticaNeueThin.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </Provider>
    );
  }
};

export default App;
