import React, {useState} from 'react';
import {StyleSheet, Text, View, InteractionManager} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import {
  ADDITIONAL_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../consts/colors';
import Button from './Shared/Button';
import {useSelector} from 'react-redux';
import {selectAdvanceDay} from '../redux/user/selectors';

const NextPayday = ({onConfirm}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payday, setPayday] = useState(new Date());
  const [isTouched, setIsTouched] = useState(false);
  const advanceDay = useSelector(selectAdvanceDay);

  const toggleModal = () => {
    setIsModalOpen(o => !o);
  };

  const handleSelectPayday = () => {
    InteractionManager.runAfterInteractions(toggleModal).then(() => {
      if (!isTouched) {
        setIsTouched(true);
      }
    });
  };

  const handleDateChange = date => {
    setPayday(date);
  };

  const handleConfirmDate = () => {
    toggleModal();
  };

  const handleConfirmPayday = () => {
    onConfirm(payday);
  };

  return (
    <View style={styles.questionContainer}>
      {isTouched && (
        <View style={styles.payday}>
          <Text style={styles.text}>Your payday is on..</Text>
          <Text style={[styles.text, styles.bigText]}>
            {moment(payday).format('DD MMMM YYYY')}
          </Text>
        </View>
      )}
      <View style={styles.buttons}>
        {isTouched && (
          <Button onPress={handleConfirmPayday} style={styles.button}>
            <Text style={styles.text}>Confirm!</Text>
          </Button>
        )}
        <Button
          onPress={handleSelectPayday}
          style={[styles.button, isTouched && styles.buttonSecondary]}>
          <Text style={[styles.text, isTouched && styles.textSecondary]}>
            {isTouched ? 'Change your Pay Day' : 'Select your next Pay Day'}
          </Text>
        </Button>
      </View>
      <Modal
        isVisible={isModalOpen}
        onBackdropPress={toggleModal}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.datePicker}>
          <Text style={styles.text}>Your next pay day is on...</Text>
          <DatePicker
            minimumDate={new Date(advanceDay || Date.now())}
            maximumDate={
              advanceDay
                ? moment(advanceDay).add(1, 'month').toDate()
                : moment().add(2, 'month').toDate()
            }
            date={payday}
            mode="date"
            onDateChange={handleDateChange}
            textColor={SECONDARY_COLOR}
          />
          <Button
            style={styles.button}
            onPress={handleConfirmDate}
            disabled={!isTouched}>
            <Text style={styles.text}>Confirm</Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginLeft: 20,
    borderColor: SECONDARY_COLOR,
  },
  buttons: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: SECONDARY_COLOR,
  },
  payday: {
    marginVertical: 20,
  },
  bigText: {
    fontSize: 40,
  },
  datePicker: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  buttonSecondary: {
    borderColor: ADDITIONAL_COLOR,
  },
  textSecondary: {
    color: SECONDARY_COLOR,
  },
});

export default NextPayday;
