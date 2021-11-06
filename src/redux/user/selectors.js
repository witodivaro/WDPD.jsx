import {createSelector} from 'reselect';

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
