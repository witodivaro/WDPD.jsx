import {createSelector} from 'reselect';

import {SALARIES} from '../../consts/salaries';

const selectUserState = state => state.user;

export const selectIsFirstLaunch = createSelector(
  selectUserState,
  state => state.isFirstLaunch,
);

export const selectPayDay = createSelector(
  selectUserState,
  state => state.payday,
);

export const selectAdvanceDay = createSelector(
  selectUserState,
  state => state.advanceDay,
);

export const selectNextPaycheck = createSelector(
  [selectPayDay, selectAdvanceDay],
  (payDay, advanceDay) => {
    const nextPaycheck = {
      day: payDay,
      isAdvance: false,
    };
    if (advanceDay && new Date(payDay) < new Date(advanceDay)) {
      nextPaycheck.day = advanceDay;
      nextPaycheck.isAdvance = true;
    }

    return nextPaycheck;
  },
);

export const selectShowSalaryDifference = createSelector(selectSalary, salary =>
  Object.values(SALARIES).includes(salary),
);
