/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import {create, act} from 'react-test-renderer';
import AppLoader from '../../../src/components/common/AppLoader';

it.skip('App loader component', () => {
  // render the component
  let root = create(<AppLoader />);
  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();

  // update with some different props
  act(() => {
    root.update(<AppLoader text="Hello" />);
  });

  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();
  // const loader = create(<AppLoader />);
  // expect(loader).toMatchSnapshot();
});
