import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

import { AuthContext } from './src/contexts/AuthContext';

import RouteIcon from './src/components/Bet/RouteIcon';

import Authentication from './src/pages/Authentication';
import Home from './src/pages/Home';
import Bet from './src/pages/Bet';
import Account from './src/pages/Account';

import colors from './src/styles/colors';

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
            headerShown: false,
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
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
          }

          if (route.name === 'Home') {
            return (
              <Ionicons
                name="home-outline"
                size={30}
                color={focused ? colors.green_avocado : colors.gray_light}
              />
            );
          }

          if (route.name === 'Bet') {
            return (
              <Ionicons
                name="arrow-forward-outline"
                size={30}
                color={focused ? colors.green_avocado : colors.gray_light}
              />
            );
          }

          if (route.name === 'Account') {
            return (
              <Ionicons
                name="person-outline"
                size={30}
                color={focused ? colors.green_avocado : colors.gray_light}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.green_avocado,
        inactiveTintColor: colors.gray_light,
        showLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen
        name="Bet"
        component={Bet}
        options={() => ({
          tabBarIcon: () => <RouteIcon />,
        })}
      />
      <Tabs.Screen name="Account" component={Account} />
    </Tabs.Navigator>
  );
};

const Routes = () => {
  const { token } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <MainStackScreen userToken={token} />
    </NavigationContainer>
  );
};

export default Routes;
