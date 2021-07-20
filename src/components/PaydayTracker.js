import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text, Share} from 'react-native';

import NumberContainer from './NumberContainer';
import Button from './Shared/Button';

import {ONE_SECOND_IN_MS} from '../consts/time';
import {DEFAULT_CONFIG} from '../consts/defaultConfig';
import {getDateDifference, getPayDay} from '../utils/calculations';
import {CYAN} from '../consts/colors';
import {getShareMessage} from '../utils/texts';

const payDay = getPayDay(8);
const {width} = Dimensions.get('window');

const PaydayTracker = () => {
  const [difference, setDifference] = useState(
    getDateDifference(Date.now(), payDay),
  );

  const {days, hours, minutes, seconds} = difference;

  useEffect(() => {
    const interval = setInterval(() => {
      setDifference(getDateDifference(Date.now(), payDay));
    }, ONE_SECOND_IN_MS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const share = () => {
    Share.share({
      message: getShareMessage(difference),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>до зарплаты:</Text>
      </View>

      <View style={styles.timeContainer}>
        <NumberContainer number={days} text="days" />
        <NumberContainer number={hours} text="hours" />
        <NumberContainer number={minutes} text="minutes" />
        <NumberContainer number={seconds} text="seconds" />
      </View>
      <Button style={styles.button} onPress={share}>
        <Text style={styles.buttonText}>рассказать всем</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    position: 'relative',
    flexDirection: 'row',
    zIndex: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 30 / (width / DEFAULT_CONFIG.WIDTH),
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: CYAN,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(109, 213, 237, 0.3)',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default PaydayTracker;
