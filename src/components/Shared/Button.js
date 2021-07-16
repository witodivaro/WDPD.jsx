import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = ({children, style, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
