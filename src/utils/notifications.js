import {PAYDAY_NOTIFICATION_ID} from '../consts/notifications';

export const getPayDayNotification = date => ({
  id: PAYDAY_NOTIFICATION_ID,
  title: 'ОПАЧКИ, А ЧТО ТУТ У НАС?',
  message: 'ДЕНЬ ЗАРПЛАТЫ!!!!!',
  date,
  ifNotExists: true,
});
