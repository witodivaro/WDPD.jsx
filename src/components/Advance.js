import React, {useState} from 'react';
import {InteractionManager, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import {
  ADDITIONAL_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../consts/colors';
import Button from './Shared/Button';

const Advance = ({onConfirm, onCancel}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [advanceDay, setAdvanceDay] = useState(new Date());
  const [isTouched, setIsTouched] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(o => !o);
  };

  const handleSelectAdvance = () => {
    toggleModal();
    InteractionManager.runAfterInteractions().then(() => {
      if (!isTouched) {
        setIsTouched(true);
      }
    });
  };

  const handleDateChange = date => {
    setAdvanceDay(date);
  };

  const handleConfirmDate = () => {
    toggleModal();
  };

  const handleConfirmAdvance = () => {
    onConfirm(advanceDay);
  };

  const clearDate = () => {
    setAdvanceDay(new Date());
    setIsTouched(false);
    toggleModal();
  };

  return (
    <View style={styles.questionContainer}>
      <View style={styles.payday}>
        {isTouched && (
          <>
            <Text style={styles.text}>Your advance is on..</Text>
            <Text style={[styles.text, styles.bigText]}>
              {moment(advanceDay).format('DD MMMM YYYY')}
            </Text>
          </>
        )}
        {!isTouched && (
          <Text style={[styles.text, isTouched && styles.textSecondary]}>
            Do you have an advance?
          </Text>
        )}
      </View>
      <View style={styles.buttons}>
        {isTouched && (
          <Button onPress={handleConfirmAdvance} style={styles.button}>
            <Text style={styles.text}>Confirm!</Text>
          </Button>
        )}
        <Button
          onPress={handleSelectAdvance}
          style={[styles.button, isTouched && styles.buttonSecondary]}>
          <Text style={[styles.text, isTouched && styles.textSecondary]}>
            {isTouched ? 'Change your Advance Day' : 'Yes'}
          </Text>
        </Button>
        {!isTouched && (
          <Button
            onPress={onCancel}
            style={[styles.button, isTouched && styles.buttonSecondary]}>
            <Text style={styles.text}>No</Text>
          </Button>
        )}
      </View>
      <Modal
        isVisible={isModalOpen}
        onBackdropPress={toggleModal}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.datePicker}>
          <Text style={styles.text}>Your next advance is on...</Text>
          <DatePicker
            minimumDate={new Date()}
            maximumDate={
              new Date(new Date().setMonth(new Date().getMonth() + 2))
            }
            date={advanceDay}
            mode="date"
            onDateChange={handleDateChange}
            textColor={SECONDARY_COLOR}
          />
          <View style={styles.buttons}>
            <Button
              style={styles.button}
              onPress={handleConfirmDate}
              disabled={!isTouched}>
              <Text style={styles.text}>Confirm</Text>
            </Button>
            <Button style={styles.button} onPress={clearDate}>
              <Text style={styles.text}>Clear</Text>
            </Button>
          </View>
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

export default Advance;
