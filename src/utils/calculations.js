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

    while (isWeekend(possiblePayDay)) {
      possiblePayDay.setDate(possiblePayDay.getDate() - 1);
    }

    if (rightNow <= possiblePayDay) {
      return possiblePayDay;
    }
  }

  payDay.setHours(12);
  payDay.setMinutes(0);
  payDay.setSeconds(0);
  payDay.setMilliseconds(0);

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

export const getDifferenceDisplayText = secondsRemaining => {
  const msRemaining = secondsRemaining * 1000;

  const difference = {
    days: Math.floor(msRemaining / ONE_DAY_IN_MS),
    hours: Math.floor(msRemaining / ONE_HOUR_IN_MS),
    minutes: Math.floor(msRemaining / ONE_MINUTE_IN_MS),
    seconds: Math.floor(msRemaining / ONE_SECOND_IN_MS),
  };

  if (difference.days) {
    return {
      title: 'days',
      time: difference.days,
    };
  }

  if (difference.hours) {
    return {
      title: 'hours',
      time: difference.hours,
    };
  }

  if (difference.minutes) {
    return {
      title: 'minutes',
      time: difference.minutes,
    };
  }

  if (difference.seconds) {
    return {
      title: 'seconds',
      time: difference.seconds,
    };
  }
};
