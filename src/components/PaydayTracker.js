import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

import NumberContainer from './NumberContainer';

import {
  ONE_DAY_IN_MS,
  ONE_HOUR_IN_MS,
  ONE_MINUTE_IN_MS,
  ONE_SECOND_IN_MS,
} from '../consts/time';
import {DEFAULT_CONFIG} from '../consts/defaultConfig';

const rightNow = new Date();
const payDay = new Date(rightNow.getFullYear(), rightNow.getMonth() + 1, 8, 12);

const {width} = Dimensions.get('window');

const PaydayTracker = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, ONE_SECOND_IN_MS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>до зарплаты:</Text>
      </View>

      <View style={styles.timeContainer}>
        <NumberContainer
          number={Math.floor((payDay - now) / ONE_DAY_IN_MS)}
          text="days"
        />
        <NumberContainer
          number={Math.floor(((payDay - now) % ONE_DAY_IN_MS) / ONE_HOUR_IN_MS)}
          text="hours"
        />
        <NumberContainer
          number={Math.floor(
            ((payDay - now) % ONE_HOUR_IN_MS) / ONE_MINUTE_IN_MS,
          )}
          text="minutes"
        />
        <NumberContainer
          number={Math.floor(
            ((payDay - now) % ONE_MINUTE_IN_MS) / ONE_SECOND_IN_MS,
          )}
          text="seconds"
        />
      </View>
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
});

export default PaydayTracker;
