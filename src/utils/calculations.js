import {
  ONE_DAY_IN_MS,
  ONE_HOUR_IN_MS,
  ONE_MINUTE_IN_MS,
  ONE_SECOND_IN_MS,
} from '../consts/time';

const isWeekend = date => {
  return [0, 6].includes(new Date(date).getDay());
};

export const getPayDay = monthDay => {
  const rightNow = new Date();

  const payDay = new Date(
    rightNow.getFullYear(),
    rightNow.getMonth() + 1,
    monthDay,
    12,
  );

  while (isWeekend(payDay)) {
    payDay.setDate(payDay.getDate() - 1);
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
