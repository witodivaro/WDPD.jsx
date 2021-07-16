export const SET_SALARY = 'SET_SALARY';
export const SET_IS_FIRST_LAUNCH = 'SET_IS_FIRST_LAUNCH';

export const setSalary = salary => ({
  type: SET_SALARY,
  payload: {salary},
});

export const setIsFirstLaunch = isFirstLaunch => ({
  type: SET_IS_FIRST_LAUNCH,
  payload: {isFirstLaunch},
});
