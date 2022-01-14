import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

import NextPayday from '../../components/NextPayday';

import {ADDITIONAL_COLOR, PRIMARY_COLOR} from '../../consts/colors';
import {setPayDay} from '../../redux/user/actions';

const Onboarding = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNextPaydayConfirm = date => {
    dispatch(setPayDay(date));

    navigation.navigate('home');
  };

  return (
    <LinearGradient
      colors={[PRIMARY_COLOR, ADDITIONAL_COLOR]}
      style={styles.container}>
      <NextPayday onConfirm={handleNextPaydayConfirm} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default Onboarding;
