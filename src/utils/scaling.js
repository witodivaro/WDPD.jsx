import {Dimensions} from 'react-native';

const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('window');

const INITIAL_WIDTH = 375;
const INITIAL_HEIGHT = 812;

export const scaling = {
  vs: size => Math.floor((DEVICE_HEIGHT / INITIAL_HEIGHT) * size),
  hs: size => Math.floor((DEVICE_WIDTH / INITIAL_WIDTH) * size),
};
