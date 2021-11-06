import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({children, style, onPress, disabled, ...otherProps}) => {
  return (
    <TouchableOpacity
      style={[style, ...[disabled ? styles.disabled : []]]}
      disabled={disabled}
      onPress={onPress}
      {...otherProps}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.3,
  },
});

export default Button;
