import {createSelector} from 'reselect';

const selectUserState = state => state.user;

export const selectSalary = createSelector(
  selectUserState,
  state => state.salary,
);

export const selectIsFirstLaunch = createSelector(
  selectUserState,
  state => state.isFirstLaunch,
);
