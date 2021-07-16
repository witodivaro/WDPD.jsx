import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const Sliding = ({
  initialValue,
  toValue,
  delay,
  children,
  styles,
  duration,
}) => {
  const slideAnim = useRef(new Animated.Value(initialValue)).current;
  const viewStyles = styles || {};

  useEffect(() => {
    Animated.loop(
      Animated.timing(slideAnim, {
        toValue,
        duration: duration || 2500,
        easing: Easing.bezier(0.03, 0.86, 0.62, 0.99),
        delay,
        useNativeDriver: true,
      }),
    ).start();
  }, [slideAnim, toValue, delay, duration]);

  return (
    <Animated.View
      style={{
        ...viewStyles,
        transform: [{translateX: slideAnim}],
      }}>
      {children}
    </Animated.View>
  );
};

export default Sliding;
