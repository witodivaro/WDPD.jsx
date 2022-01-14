import {createSelector} from 'reselect';

import {SALARIES} from '../../consts/salaries';
import {getPayDay} from '../../utils/calculations';

const selectUserState = state => state.user;

export const selectIsFirstLaunch = createSelector(
  selectUserState,
  state => state.isFirstLaunch,
);

export const selectFirstPayDay = createSelector(
  selectUserState,
  state => state.payday,
);

export const selectAdvanceDay = createSelector(
  selectUserState,
  state => state.advanceDay,
);

export const selectNextPaycheck = createSelector(
  [selectFirstPayDay],
  firstPayDay => {
    const nextPayDay = getPayDay(firstPayDay);

    return nextPayDay;
  },
);

export const selectShowSalaryDifference = createSelector(
  selectFirstPayDay,
  salary => Object.values(SALARIES).includes(salary),
);
