import React from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';

const PaydayCongratulations = ({onAnimationEnd}) => {
  return (
    <ConfettiCannon
      onAnimationEnd={onAnimationEnd}
      count={250}
      origin={{x: -10, y: 0}}
      fadeOut={true}
    />
  );
};

export default PaydayCongratulations;
