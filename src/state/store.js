import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Thunk from 'redux-thunk';

import userSlice from './user/userSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userSlice,
});

export const RootState = () => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, compose(applyMiddleware(Thunk)));
  const persistor = persistStore(store);
};
