import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="home">
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="home"
      component={Home}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
