import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  ADDITIONAL_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../consts/colors';

import {DEFAULT_CONFIG} from '../consts/defaultConfig';

const {width} = Dimensions.get('window');

const NumberContainer = ({number, text}) => {
  return (
    <LinearGradient
      colors={[PRIMARY_COLOR, ADDITIONAL_COLOR]}
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
    borderRadius: 10,
    alignItems: 'center',
  },
  number: {
    color: SECONDARY_COLOR,
    fontSize: (40 * DEFAULT_CONFIG.WIDTH) / width,
  },
  text: {
    color: SECONDARY_COLOR,
    fontSize: 16,
  },
});
