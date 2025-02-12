export const ONE_SECOND_IN_MS = 1000;
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * 60;
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * 60;
export const ONE_DAY_IN_MS = ONE_HOUR_IN_MS * 24;

export const getCurrentDayPart = () => {
  const currentHour = new Date().getHours();

  if (currentHour > 17) {
    return 'evening';
  }

  if (currentHour > 13) {
    return 'afternoon';
  }

  return 'morning';
};
