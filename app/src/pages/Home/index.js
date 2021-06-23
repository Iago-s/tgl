import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from 'react-native';

const Home = () => {
  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('@app/token');

      alert(token);
    };

    getToken();
  }, []);

  return (
    <View>
      <Text>Home page</Text>
    </View>
  );
};

export default Home;
