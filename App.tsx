import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AppContainer from './src/App';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {I18nManager} from 'react-native';
import {decode, encode} from 'base-64';

const persistor = persistStore(store);

I18nManager.allowRTL(true);

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
export default () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  </GestureHandlerRootView>
);
