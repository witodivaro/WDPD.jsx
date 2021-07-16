import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PaydayTracker from '../components/PaydayTracker';
import SalaryDifference from '../components/SalaryDifference';

import {CYAN, LIGHT_BLUE} from '../consts/colors';
import {getRandomBackgroundPicture} from '../utils/randomPic';

const backgroundPicture = getRandomBackgroundPicture();

const Home = () => {
  return (
    <LinearGradient colors={[CYAN, LIGHT_BLUE]} style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          source={backgroundPicture}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <PaydayTracker />
        </View>
        <SalaryDifference style={styles.difference} />
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
    marginTop: 100,
  },
});

export default Home;
