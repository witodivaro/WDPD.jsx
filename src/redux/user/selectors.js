import {createSelector} from 'reselect';

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
