/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
import {create, act} from 'react-test-renderer';
import SimpleTest from '../src/pages/SimpleTest';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

// it('Menu page', () => {
//   const menuPage = renderer.create(<Menu />);
//   expect(menuPage).toMatchSnapshot();
// });
const simplePage = create(<SimpleTest />);

it.skip('Simple page', () => {
  expect(simplePage).toMatchSnapshot();
});

test.skip('Test Button', () => {
  const helloBtn = simplePage.root.findByProps({testID: 'helloButton'}).props;
  act(() => helloBtn.onPress());

  const helloText = simplePage.root.findByProps({testID: 'textHello'}).props;
  expect(helloText.children).toEqual('Hello Test');
});
