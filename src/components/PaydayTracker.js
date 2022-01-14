import {useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Share,
  LayoutAnimation,
  Text,
  View,
  Button,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

import {getDifferenceDisplayText, getPayDay} from '../utils/calculations';
import {ADDITIONAL_COLOR, SECONDARY_COLOR} from '../consts/colors';
import {getShareMessage} from '../utils/texts';
import {selectNextPaycheck} from '../redux/user/selectors';
import {useRef} from 'react';
import {scaling} from '../utils/scaling';
import {ONE_DAY_IN_MS} from '../consts/time';

const PaydayTracker = () => {
  const nextPaycheck = useSelector(selectNextPaycheck);

  const nextPaycheckDate = useRef(getPayDay(nextPaycheck.day)).current;
  console.log(nextPaycheckDate);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  const secondsTilPayday = Math.floor(
    (nextPaycheck.getTime() - Date.now()) / 1000,
  );

  const totalSecondsDifference = Math.floor((ONE_DAY_IN_MS / 1000) * 30);

  const share = () => {
    Share.share({
      message: getShareMessage(secondsTilPayday),
    });
  };

  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        size={scaling.hs(320)}
        isPlaying
        duration={totalSecondsDifference}
        initialRemainingTime={secondsTilPayday}
        colors={[SECONDARY_COLOR, ADDITIONAL_COLOR]}>
        {({remainingTime}) => {
          const difference = getDifferenceDisplayText(remainingTime);

          if (!difference) {
            return <Text style={styles.timeTitle}>Congratulations!</Text>;
          }

          return (
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{difference.time}</Text>
              <Text style={styles.timeTitle}>{difference.title}</Text>
            </View>
          );
        }}
      </CountdownCircleTimer>
      <View style={styles.buttonContainer}>
        <Button title="рассказать" onPress={share} color={SECONDARY_COLOR} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTitle: {
    color: SECONDARY_COLOR,
    fontSize: scaling.hs(30),
  },
  timeText: {
    color: SECONDARY_COLOR,
    fontSize: scaling.hs(50),
  },
  timeContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: scaling.vs(20),
  },
});

export default PaydayTracker;
