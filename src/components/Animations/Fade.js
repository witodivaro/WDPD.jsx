import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const Fade = ({
  delay,
  children,
  style,
  duration,
  fadeOutDelay,
  onAnimationEnd,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const viewStyles = style || {};

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration || 1000,
      easing: Easing.bezier(0.03, 0.86, 0.62, 0.99),
      delay: delay || 0,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.bezier(0.03, 0.86, 0.62, 0.99),
        delay: fadeOutDelay || 200,
        useNativeDriver: true,
      }).start(() => {
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      });
    });
  }, [delay, duration, fadeAnim, fadeOutDelay, onAnimationEnd]);

  return (
    <Animated.View
      style={{
        ...viewStyles,
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

export default Fade;
