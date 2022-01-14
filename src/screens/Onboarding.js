import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';

import SalaryQuestion from '../components/SalaryQuestion';
import {CYAN, LIGHT_BLUE} from '../consts/colors';
import {setIsFirstLaunch, setSalary} from '../redux/user/actions';

const Onboarding = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSalaryConfirm = salary => {
    dispatch(setIsFirstLaunch(false));
    dispatch(setSalary(Number(salary)));
    navigation.reset({
      routes: [{name: 'home'}],
      index: 0,
    });
  };

  return (
    <LinearGradient colors={[CYAN, LIGHT_BLUE]} style={styles.container}>
      <SalaryQuestion onConfirm={handleSalaryConfirm} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default Onboarding;
