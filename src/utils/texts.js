import {getDifferenceDisplayText} from './calculations';

const getStatus = seconds => {
  const {title, time} = getDifferenceDisplayText(seconds);

  switch (title) {
    case 'days':
      if (time > 25) {
        return 'С почином!';
      }

      if (time >= 10) {
        return 'Держитесь..';
      }

      if (time > 5) {
        return 'Лут подъезжает!';
      }

      if (time === 1) {
        return 'ОН УЖЕ БЛИЗКО!';
      }
      break;
    case 'hours':
      return 'Накрывайте на стол!';
    case 'minutes':
      return 'Берите кредит!';
    case 'seconds':
      return 'я в шоке!';
  }
};

export const getShareMessage = seconds => {
  const {title, time} = getDifferenceDisplayText(seconds);

  const status = getStatus(seconds);

  let message = `${status}\n`;

  message += `До следующей зарплаты осталось ${time} ${title}`;

  return message;
};
