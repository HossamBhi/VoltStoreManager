import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StatusBar,
  View,
  SafeAreaView,
  StatusBarStyle,
  useColorScheme,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {DarkTheme, DefaultTheme} from './utils/schema';
import {Provider, useSelector} from 'react-redux';
import {RootState, store} from './redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from './navigation';
import SplashScreen from 'react-native-splash-screen';

const persistor = persistStore(store);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const MyStatusBar = ({
  backgroundColor = '#FFFFFF',
  barStyle = 'dark-content',
}: {
  backgroundColor?: any;
  barStyle?: StatusBarStyle | null | undefined;
}) => (
  <View style={[{height: STATUSBAR_HEIGHT}, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent {...{barStyle, backgroundColor}} />
    </SafeAreaView>
  </View>
);

const AppContainer = () => {
  const {activeTheme} = useSelector((state: RootState) => state.appSettings);

  const scheme = useColorScheme();
  const isDark =
    activeTheme.value === 1
      ? scheme === 'dark'
      : activeTheme.value === 2
      ? true
      : false;
  const theme = isDark ? DarkTheme : DefaultTheme;
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 100);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <MyStatusBar
              backgroundColor={theme.colors.primary}
              barStyle={'light-content'}
            />
            <MainStack />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppContainer;
