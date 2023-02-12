import React from 'react';
import {act, create} from 'react-test-renderer';
import CustomeImage from '../../../src/components/common/CustomeImage';

it('Render Custome Image', () => {
  const image = create(<CustomeImage />);
  const testId = image.root.findByProps({testID: 'image'}).props;
  act(() => testId.onError());
  // expect(testId.source).toBe(require('../../assets/logo.png'));
  expect(image.toJSON()).toMatchSnapshot();
});
