import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Authentication from './src/pages/Authentication';
import Home from './src/pages/Home';
import Bet from './src/pages/Bet';
import Account from './src/pages/Account';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const MainStackScreen = ({ userToken }) => {
  return (
    <Stack.Navigator>
      {userToken ? (
        <Stack.Screen
          name="App"
          component={TabsScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

const TabsScreen = () => {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Bet" component={Bet} />
      <Tabs.Screen name="Account" component={Account} />
    </Tabs.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <MainStackScreen userToken={false} />
    </NavigationContainer>
  );
};

export default Routes;
