import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

import PaydayTracker from '../../components/PaydayTracker';

import {selectShowPayDayCongratulations} from '../../redux/notifications/selectors';

import {getRandomBackgroundPicture} from '../../utils/background';
import {ADDITIONAL_COLOR, PRIMARY_COLOR} from '../../consts/colors';
import PaydayCongratulations from '../../components/PaydayCongratulations';
import {setShowPayDayCongratulations} from '../../redux/notifications/actions';

const randomBackground = getRandomBackgroundPicture();

const Home = () => {
  const dispatch = useDispatch();

  const showPayDayCongratulations = useSelector(
    selectShowPayDayCongratulations,
  );

  const closePayDayCongratulations = () => {
    dispatch(setShowPayDayCongratulations(false));
  };

  return (
    <LinearGradient
      colors={[PRIMARY_COLOR, ADDITIONAL_COLOR]}
      style={styles.container}>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          source={randomBackground}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <PaydayTracker />
        </View>
      </View>
      {showPayDayCongratulations && (
        <View style={styles.congratulationsWrapper}>
          <PaydayCongratulations onAnimationEnd={closePayDayCongratulations} />
        </View>
      )}
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
