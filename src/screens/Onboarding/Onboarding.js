import React from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';

import NextPayday from '../../components/NextPayday';
import Advance from '../../components/Advance';

import {ADDITIONAL_COLOR, PRIMARY_COLOR} from '../../consts/colors';
import {
  setAdvance,
  setIsFirstLaunch,
  setPayDay,
} from '../../redux/user/actions';

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const next = () => {
    if (currentSlide === 1) {
      dispatch(setIsFirstLaunch(false));
      navigation.navigate('home');
    } else {
      setCurrentSlide(p => p + 1);
      carouselRef.current.snapToNext();
    }
  };

  const handleAdvanceSet = advanceDay => {
    dispatch(setAdvance(advanceDay.getTime()));
    next();
  };

  const handleAdvanceCancel = () => {
    dispatch(setAdvance(null));
    next();
  };

  const handlePayDaySet = payDay => {
    dispatch(setPayDay(payDay.getTime()));
    next();
  };

  const renderItem = ({index}) => {
    if (index === 0) {
      return (
        <Advance onConfirm={handleAdvanceSet} onCancel={handleAdvanceCancel} />
      );
    }

    if (index === 1) {
      return <NextPayday onConfirm={handlePayDaySet} />;
    }

    return null;
  };

  return (
    <LinearGradient
      colors={[PRIMARY_COLOR, ADDITIONAL_COLOR]}
      style={styles.container}>
      <Carousel
        layout="default"
        sliderHeight={Dimensions.get('window').height}
        itemHeight={Dimensions.get('window').height}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        ref={carouselRef}
        data={Array.from({length: 2})}
        renderItem={renderItem}
        scrollEnabled={false}
      />
      <Pagination dotsLength={2} activeDotIndex={currentSlide} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default Onboarding;
