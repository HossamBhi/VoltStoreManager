import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

export default ({html, textColor}: {html?: string; textColor?: string}) => {
  const {width} = useWindowDimensions();

  return (
    <RenderHtml
      contentWidth={width}
      source={{
        html: `<body dir="rtl" ><p style="padding: 0px; margin: 0;" dir="rtl" >${html}</p></body>`,
      }}
      tagsStyles={{
        body: {
          paddingTop: 0,
          marginTop: 0,
          color: textColor || '#fff',
        },
        p: {
          paddingBottom: 0,
          marginBottom: 0,
          paddingTop: 0,
          marginTop: 5,
        },
      }}
    />
  );
};
