import {t} from 'i18next';
import React from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import ListItem from './ListItem';
import {TextProp} from '../../utils/types';

export interface CustomeTextInputProps extends TextProp {
  // value?: any;
  // onChangeText?: any;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<any>;
  [key: string]: any;
}

export default ({
  containerStyle,
  inputStyle,
  placeholder,
  value,
  onChangeText,
  ...props
}: CustomeTextInputProps & TextInputProps) => {
  const {colors}: any = useTheme();
  return (
    <ListItem
      style={[
        styles.container,
        {backgroundColor: colors.surfaceVariant},
        containerStyle,
      ]}
      centerPart={
        <TextInput
          {...{value, onChangeText, ...props}}
          placeholder={(placeholder || t('typeSomeThing')) + ''}
          placeholderTextColor={colors.onSurfaceVariant}
          style={[{color: colors.text}, styles.input, inputStyle]}
        />
      }
      rightPart={props.rightPart}
      leftPart={props.leftPart}
    />
  );
};

const styles = StyleSheet.create({
  container: {borderRadius: 10, paddingHorizontal: 15, paddingVertical: 8},
  input: {flex: 1, fontSize: 14, paddingHorizontal: 10},
});
