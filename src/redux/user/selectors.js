import {createSelector} from 'reselect';

import {SALARIES} from '../../consts/salaries';

const selectUserState = state => state.user;

export const selectSalary = createSelector(
  selectUserState,
  state => state.salary,
);

export const selectIsFirstLaunch = createSelector(
  selectUserState,
  state => state.isFirstLaunch,
);

export const selectShowSalaryDifference = createSelector(selectSalary, salary =>
  Object.values(SALARIES).includes(salary),
);
