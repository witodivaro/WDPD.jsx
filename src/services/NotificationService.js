import PushNotification from 'react-native-push-notification';
import {PAYDAY_NOTIFICATION_ID} from '../consts/notifications';
import {setShowPayDayCongratulations} from '../redux/notifications/actions';
import {store} from '../redux/root';

class NotificationService {
  initialize() {
    PushNotification.deleteChannel('local-notifications');
    PushNotification.createChannel(
      {
        channelId: 'local-notifications',
        channelName: 'local',
      },
      created =>
        console.log(`local-notifications channel creation returned ${created}`),
    );
  }

  sendLocalNotification({title, message, date, ifNotExists, id = Date.now()}) {
    PushNotification.getScheduledLocalNotifications(notifications => {
      if (ifNotExists) {
        const notificationExists = notifications.some(
          notification =>
            notification.title === title && notification.message === message,
        );

        if (notificationExists) {
          return;
        }
      }

      PushNotification.localNotificationSchedule({
        id,
        channelId: 'local-notifications',
        title,
        message,
        date,
      });
    });
  }

  handleNotification(notificationId) {
    switch (notificationId) {
      case String(PAYDAY_NOTIFICATION_ID):
        return store.dispatch(setShowPayDayCongratulations(true));
    }
  }
}

export default new NotificationService();
