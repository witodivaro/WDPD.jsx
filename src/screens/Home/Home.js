import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PaydayTracker from '../../components/PaydayTracker';

import {ADDITIONAL_COLOR, PRIMARY_COLOR} from '../../consts/colors';

const Home = () => {
  return (
    <LinearGradient
      colors={[PRIMARY_COLOR, ADDITIONAL_COLOR]}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <PaydayTracker />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  backgroundImageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  wrapper: {
    paddingTop: 100,
  },
  difference: {
    marginTop: 60,
  },
  congratulationsWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 50,
  },
});

export default Home;
