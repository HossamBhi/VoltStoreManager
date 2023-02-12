import React from 'react';
import {useTheme} from 'react-native-paper';
import useRFontValue from '../../hooks/useRFontValue';
import Feather from 'react-native-vector-icons/Feather';

import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface CustomeIconProps {
  Tag?: any;
  name?: string;
  style?: StyleProp<ViewStyle> & StyleProp<TextStyle>;
  size?: number;
  color?: string;
}

export default ({
  Tag = Feather,
  name,
  style,
  size,
  color,
}: CustomeIconProps) => {
  const {colors}: any = useTheme();
  return (
    <Tag
      name={name}
      size={useRFontValue(size || 24)}
      color={color || colors.text}
      style={style}
    />
  );
};
