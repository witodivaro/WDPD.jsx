import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from './src/redux/root';
import NotificationService from './src/services/NotificationService';

PushNotification.configure({
  requestPermissions: Platform.OS === 'ios',
  onNotification: function (notification) {
    NotificationService.handleNotification(notification.id);

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
});

NotificationService.initialize();

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
