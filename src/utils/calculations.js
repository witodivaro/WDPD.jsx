import {
  ONE_DAY_IN_MS,
  ONE_HOUR_IN_MS,
  ONE_MINUTE_IN_MS,
  ONE_SECOND_IN_MS,
} from '../consts/time';

const isWeekend = date => {
  return [0, 6].includes(new Date(date).getDay());
};

export const getPayDay = nextPayday => {
  const rightNow = new Date();

  const payDay = new Date(nextPayday);

  while (new Date(payDay).getTime() < rightNow.getTime()) {
    payDay.setMonth(payDay.getMonth() + 1);
  }

  while (isWeekend(payDay)) {
    payDay.setDate(payDay.getDate() - 1);
  }

  if (rightNow.getDate() <= payDay.getDate()) {
    const possiblePayDay = new Date(payDay);
<<<<<<< HEAD
=======
    possiblePayDay.setMonth(rightNow.getMonth());
>>>>>>> ec1d06a3cbd33dde931d20a4395c98c47c121e11

    while (isWeekend(possiblePayDay)) {
      possiblePayDay.setDate(possiblePayDay.getDate() - 1);
    }

    if (rightNow <= possiblePayDay) {
      return possiblePayDay;
    }
  }

<<<<<<< HEAD
  payDay.setHours(12);

=======
>>>>>>> ec1d06a3cbd33dde931d20a4395c98c47c121e11
  return payDay;
};

export const getDateDifference = (date1, date2) => {
  const diff = Math.abs(new Date(date2) - new Date(date1));

  const difference = {
    days: Math.floor(diff / ONE_DAY_IN_MS),
    hours: Math.floor((diff % ONE_DAY_IN_MS) / ONE_HOUR_IN_MS),
    minutes: Math.floor((diff % ONE_HOUR_IN_MS) / ONE_MINUTE_IN_MS),
    seconds: Math.floor((diff % ONE_MINUTE_IN_MS) / ONE_SECOND_IN_MS),
  };

  return difference;
};
