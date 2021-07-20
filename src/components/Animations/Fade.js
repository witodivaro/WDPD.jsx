import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const Fade = ({
  delay,
  children,
  style,
  duration,
  fadeOutDelay,
  onAnimationEnd,
  looped,
  toValue,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const viewStyles = style || {};

  useEffect(() => {
    const fadeInConfig = {
      toValue: toValue || 1,
      duration: duration || 1000,
      easing: Easing.bezier(0.03, 0.86, 0.62, 0.99),
      delay: delay || 0,
      useNativeDriver: true,
    };

    const fadeOutConfig = {
      toValue: 0,
      duration: 200,
      easing: Easing.bezier(0.03, 0.86, 0.62, 0.99),
      delay: fadeOutDelay || 200,
      useNativeDriver: true,
    };

    if (looped) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, fadeInConfig),
          Animated.timing(fadeAnim, fadeOutConfig),
        ]),
      ).start();
    } else {
      Animated.timing(fadeAnim, fadeInConfig).start(() => {
        Animated.timing(fadeAnim, fadeOutConfig).start(() => {
          if (onAnimationEnd) {
            onAnimationEnd();
          }
        });
      });
    }
  }, [
    delay,
    duration,
    fadeAnim,
    fadeOutDelay,
    onAnimationEnd,
    looped,
    toValue,
  ]);

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
