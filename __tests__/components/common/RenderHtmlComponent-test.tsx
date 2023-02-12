import React from 'react';
import {create} from 'react-test-renderer';
import RenderHtmlComponent from '../../../src/components/common/RenderHtmlComponent';

it('Render Html Component', () => {
  const CHtml = create(<RenderHtmlComponent />);
  expect(CHtml.toJSON()).toMatchSnapshot();
});
