import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {DEFAULT_CONFIG} from '../consts/defaultConfig';

const {width} = Dimensions.get('window');

const NumberContainer = ({number, text}) => {
  return (
    <LinearGradient
      colors={['#2193b0', '#6dd5ed']}
      style={styles.infoContainer}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </LinearGradient>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  infoContainer: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontSize: (40 * DEFAULT_CONFIG.WIDTH) / width,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
