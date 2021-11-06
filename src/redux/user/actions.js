export const SET_IS_FIRST_LAUNCH = 'SET_IS_FIRST_LAUNCH';
export const SET_ADVANCE = 'SET_ADVANCE';
export const SET_PAYDAY = 'SET_PAYDAY';

export const setIsFirstLaunch = isFirstLaunch => ({
  type: SET_IS_FIRST_LAUNCH,
  payload: {isFirstLaunch},
});

export const setPayDay = payDay => ({
  type: SET_PAYDAY,
  payload: {payDay},
});

export const setAdvance = advanceDay => ({
  type: SET_ADVANCE,
  payload: {advanceDay},
});
