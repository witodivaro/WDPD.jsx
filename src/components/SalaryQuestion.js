import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Vibration,
} from 'react-native';

import Fade from './Animations/Fade';
import Sliding from './Animations/Sliding';
import Button from './Shared/Button';

import {MAX_POSSIBLE_SALARY} from '../consts/limits';

const {width} = Dimensions.get('window');

const SalaryQuestion = ({onConfirm}) => {
  const [salary, setSalary] = useState('');
  const [isWrongSalary, setIsWrongSalary] = useState(false);

  const handleConfirmPress = () => {
    if (salary > MAX_POSSIBLE_SALARY) {
      setIsWrongSalary(true);
      return Vibration.vibrate([0, 200]);
    }

    onConfirm(salary);
  };

  const handleSalaryChange = newSalary => {
    setSalary(newSalary.replace(/\D/g, '').slice(0, 4));
  };

  return (
    <View style={styles.container}>
      <View style={styles.fadeTextContainer}>
        <Fade toValue={1} looped duration={6000} style={styles.textContainer}>
          <Text style={styles.text}>СКОЛЬКО?</Text>
        </Fade>
        <Fade
          toValue={1}
          delay={2000}
          duration={4000}
          looped
          style={styles.textContainer}>
          <Text style={styles.text}>ТЫ</Text>
        </Fade>
        <Fade
          toValue={1}
          delay={4000}
          duration={2000}
          looped
          style={styles.textContainer}>
          <Text style={styles.text}>ЗАРАБАТЫВАЕШЬ?</Text>
        </Fade>
      </View>
      <Sliding
        initialValue={-width}
        toValue={width}
        style={styles.textContainer}>
        <Text style={styles.text}>Сколько</Text>
      </Sliding>
      <Sliding
        initialValue={-width}
        toValue={width}
        style={styles.textContainer}
        delay={500}>
        <Text style={styles.text}>ты</Text>
      </Sliding>
      <Sliding
        initialValue={-width}
        toValue={width}
        style={styles.textContainer}
        delay={1000}>
        <Text style={styles.text}>Зарабатываешь?</Text>
      </Sliding>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          selectionColor="white"
          placeholder="1400"
          value={salary}
          onChangeText={handleSalaryChange}
        />
        <Text style={styles.inputIcon}>$</Text>
      </View>
      {salary ? (
        <Button style={styles.button} onPress={handleConfirmPress}>
          <Text style={styles.buttonText}>Подтвердить</Text>
        </Button>
      ) : null}
      {isWrongSalary ? (
        <View style={styles.fadeContainer}>
          <Fade
            style={styles.fade}
            duration={300}
            fadeOutDelay={2000}
            onAnimationEnd={() => setIsWrongSalary(false)}>
            <Text style={styles.fadeText}>{`$${salary}?\nнастоящую!`}</Text>
          </Fade>
        </View>
      ) : null}
    </View>
  );
};

export default SalaryQuestion;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  textContainer: {
    alignItems: 'center',
  },
  textInput: {
    padding: 0,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 50,
  },
  inputContainer: {
    marginTop: 80,
    alignSelf: 'center',
    width: '50%',
  },
  inputIcon: {
    position: 'absolute',
    left: 0,
    fontSize: 50,
    color: 'white',
  },
  button: {
    marginTop: 25,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 30,
  },
  fadeContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  fade: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadeText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  fadeTextContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
