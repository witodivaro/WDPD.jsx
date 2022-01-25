import {diff} from 'react-native-reanimated';
import {createSelector} from 'reselect';

import {SALARIES} from '../../consts/salaries';
import {ONE_DAY_IN_MS} from '../../consts/time';
import {getPayDay, getPrevPayDay} from '../../utils/calculations';

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
    const nextPayDay = getPayDay(Date.now(), firstPayDay);
    return nextPayDay;
  },
);

export const selectPrevPaycheck = createSelector(
  [selectFirstPayDay],
  firstPayDay => getPrevPayDay(firstPayDay),
);

export const selectPayDayDifference = createSelector(
  selectNextPaycheck,
  selectPrevPaycheck,
  (next, prev) => {
    const difference = new Date(next).getTime() - new Date(prev).getTime();
    return Math.floor(difference / 1000);
  },
);

export const selectShowSalaryDifference = createSelector(
  selectFirstPayDay,
  salary => Object.values(SALARIES).includes(salary),
);
