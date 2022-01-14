import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingNavigator from './onboarding.navigator';
import HomeNavigator from './home.navigator';

const Stack = createStackNavigator();

const AppNavigator = ({initialRoute}) => (
  <Stack.Navigator initialRouteName={initialRoute}>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="onboarding"
      component={OnboardingNavigator}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="home"
      component={HomeNavigator}
    />
  </Stack.Navigator>
);

export default AppNavigator;
