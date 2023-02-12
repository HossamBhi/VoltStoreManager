import {useTheme} from 'react-native-paper';
import React from 'react';
import {StyleProp, TextStyle, TextProps, Text} from 'react-native';
import {TextProp} from '../../utils/types';

export interface CustomeTextProps {
  // children?: JSX.Element;
  style?: StyleProp<TextStyle>;
}

const CustomeText = ({
  children,
  style,
  text,
  ...props
}: CustomeTextProps & TextProp & TextProps) => {
  const {colors} = useTheme();
  return (
    <Text style={[{color: colors.text}, style]} {...{...props}}>
      {children}
      {text}
    </Text>
  );
};

export default CustomeText;
