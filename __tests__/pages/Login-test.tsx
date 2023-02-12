import React from 'react';
import {create} from 'react-test-renderer';
import Login from '../../src/pages/loginModule/Login';
import {Provider} from 'react-redux';
import {store} from '../../src/redux/store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const navigation: any = {navigate: jest.fn()};
const route: any = {};

const tree = create(
  <Provider store={store}>
    <PaperProvider theme={DefaultTheme}>
      <Login {...{navigation, route}} />
    </PaperProvider>
  </Provider>,
);
test('Render Login Screen', () => {
  expect(tree).toMatchSnapshot();
});

/** 
 * TODO
 * invalid username
 * invalid password
 * check if user logedin 
*/
