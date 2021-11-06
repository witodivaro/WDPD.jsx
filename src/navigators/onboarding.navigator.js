import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding/Onboarding';

const Stack = createStackNavigator();

const OnboardingNavigator = () => (
  <Stack.Navigator initialRouteName="onboarding">
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="onboarding"
      component={Onboarding}
    />
  </Stack.Navigator>
);

export default OnboardingNavigator;
