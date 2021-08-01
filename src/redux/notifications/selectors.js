import {createSelector} from 'reselect';

const selectNotificationsState = state => state.notifications;

export const selectShowPayDayCongratulations = createSelector(
  selectNotificationsState,
  notifications => notifications.showPayDayCongratulations,
);
