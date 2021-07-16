import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {LIGHT_BLUE} from '../consts/colors';

import {selectSalary} from '../redux/user/selectors';

const SalaryDifference = ({style}) => {
  const salary = useSelector(selectSalary);

  return (
    <View style={style}>
      <Text style={styles.text}>Я получу на</Text>
      <Text style={styles.salary}>{1400 - salary}$</Text>
      <Text style={styles.text}>больше</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
  salary: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
    textShadowColor: LIGHT_BLUE,
    textShadowRadius: 7,
  },
});

export default SalaryDifference;
