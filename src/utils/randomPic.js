const pics = [
  require('../assets/alex_bank.jpg'),
  require('../assets/kirill-minecraft.jpg'),
];

export const getRandomBackgroundPicture = () => {
  return pics[Math.floor(Math.random() * pics.length)];
};
