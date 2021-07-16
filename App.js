import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const ONE_SECOND_IN_MS = 1000;
const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60;
const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60;
const ONE_DAY_IN_MS = ONE_HOUR_IN_MS * 24;

const rightNow = new Date();
const payDay = new Date(rightNow.getFullYear(), rightNow.getMonth() + 1, 8);

const App = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>{Math.floor((payDay - now) / ONE_DAY_IN_MS)} days</Text>
        <Text>
          {Math.floor(((payDay - now) % ONE_DAY_IN_MS) / ONE_HOUR_IN_MS)} hours
        </Text>
        <Text>
          {Math.floor(((payDay - now) % ONE_HOUR_IN_MS) / ONE_MINUTE_IN_MS)}{' '}
          minutes
        </Text>
        <Text>
          {Math.floor(((payDay - now) % ONE_MINUTE_IN_MS) / ONE_SECOND_IN_MS)}{' '}
          seconds
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
