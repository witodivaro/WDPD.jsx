import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import AppNavigator from './src/navigators/app.navigator';

import {selectIsFirstLaunch} from './src/redux/user/selectors';

const App = () => {
  const isFirstLaunch = useSelector(selectIsFirstLaunch);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <AppNavigator initialRoute={isFirstLaunch ? 'onboarding' : 'home'} />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default App;
