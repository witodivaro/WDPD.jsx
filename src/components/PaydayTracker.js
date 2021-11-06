import {useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Share,
  LayoutAnimation,
} from 'react-native';

import NumberContainer from './NumberContainer';
import Button from './Shared/Button';

import {ONE_SECOND_IN_MS} from '../consts/time';
import {DEFAULT_CONFIG} from '../consts/defaultConfig';
import {getDateDifference, getPayDay} from '../utils/calculations';
import {
  ADDITIONAL_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../consts/colors';
import {getShareMessage} from '../utils/texts';
import NotificationService from '../services/NotificationService';
import {getPayDayNotification} from '../utils/notifications';
import {selectNextPaycheck} from '../redux/user/selectors';
import {useRef} from 'react';

const {width} = Dimensions.get('window');

const PaydayTracker = () => {
  const [difference, setDifference] = useState(
    getDateDifference(Date.now(), nextPaycheckDate),
  );
  const nextPaycheck = useSelector(selectNextPaycheck);
  const nextPaycheckDate = useRef(getPayDay(nextPaycheck.day)).current;

  const {days, hours, minutes, seconds} = difference;

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDifference(getDateDifference(Date.now(), nextPaycheckDate));
    }, ONE_SECOND_IN_MS);

    const payDayNotificationTime = new Date(nextPaycheckDate);
    payDayNotificationTime.setHours(10);

    NotificationService.sendLocalNotification(
      getPayDayNotification(payDayNotificationTime),
    );

    return () => {
      clearInterval(interval);
    };
  }, [nextPaycheckDate]);

  const share = () => {
    Share.share({
      message: getShareMessage(difference),
    });
  };

  if (!difference.seconds) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          до {nextPaycheck.isAdvance ? 'аванса' : 'зарплаты'}:
        </Text>
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
    color: SECONDARY_COLOR,
    fontSize: 30 / (width / DEFAULT_CONFIG.WIDTH),
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    borderRadius: 5,
    padding: 10,
    backgroundColor: ADDITIONAL_COLOR,
  },
  buttonText: {
    color: SECONDARY_COLOR,
    fontSize: 20,
  },
});

export default PaydayTracker;
