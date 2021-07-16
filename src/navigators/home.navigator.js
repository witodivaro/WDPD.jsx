import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();

const HomeNavigator = ({initialRoute}) => (
  <Stack.Navigator initialRouteName={initialRoute}>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="home"
      component={Home}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="onboarding"
      component={Onboarding}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
