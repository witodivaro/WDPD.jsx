import {SALARIES} from '../consts/salaries';

const PICS = {
  Kirill: require('../assets/kirill-minecraft.jpg'),
  Alex: require('../assets/alex_bank.jpg'),
  Wito: require('../assets/wito-soup.jpg'),
};

export const getRandomBackgroundPicture = () => {
  const pics = Object.values(PICS);
  return pics[Math.floor(Math.random() * pics.length)];
};

export const getSpecificBackground = salary => {
  for (const key in SALARIES) {
    if (SALARIES[key] === salary) {
      return PICS[key];
    }
  }

  return null;
};
