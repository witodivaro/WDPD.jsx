import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import {userReducer} from './user/reducer';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
