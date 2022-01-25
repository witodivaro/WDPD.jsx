import {
  ONE_DAY_IN_MS,
  ONE_HOUR_IN_MS,
  ONE_MINUTE_IN_MS,
  ONE_SECOND_IN_MS,
} from '../consts/time';

const isWeekend = date => {
  return [0, 6].includes(new Date(date).getDay());
};

export const getPrevPayDay = (firstPayDay, daysBack = 15) => {
  const firstPayDayFormatted = new Date(firstPayDay);
  firstPayDayFormatted.setHours(12, 0, 0, 0);

  const prevPayDay = getPayDay(
    Date.now() - ONE_DAY_IN_MS * daysBack,
    firstPayDayFormatted,
  );

  if (Date.now() <= prevPayDay) {
    return getPrevPayDay(firstPayDay, daysBack + 15);
  }

  return prevPayDay;
};

export const getPayDay = (from, firstPayday) => {
  const fromDate = new Date(from);
  const payDay = new Date(firstPayday);

  payDay.setHours(12, 0, 0, 0);

  while (payDay.getTime() < fromDate.getTime()) {
    payDay.setMonth(payDay.getMonth() + 1);
  }

  while (isWeekend(payDay)) {
    payDay.setDate(payDay.getDate() - 1);
  }

  if (fromDate.getDate() <= payDay.getDate()) {
    const possiblePayDay = new Date(payDay);

    while (isWeekend(possiblePayDay)) {
      possiblePayDay.setDate(possiblePayDay.getDate() - 1);
    }

    if (fromDate <= possiblePayDay) {
      return possiblePayDay;
    }
  }

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

export const getDurationByTitle = title => {
  switch (title) {
    case 'hours':
      return ONE_DAY_IN_MS / 1000;
    case 'minutes':
      return ONE_HOUR_IN_MS / 1000;
    case 'seconds':
      return ONE_MINUTE_IN_MS / 1000;
  }
};
