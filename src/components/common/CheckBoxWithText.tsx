import React from 'react';
import {Pressable, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Checkbox} from 'react-native-paper';
import CustomeText from './CustomeText';
import {DefaultTFuncReturn} from 'i18next';

interface CheckBoxWithTextProps {
  text?: DefaultTFuncReturn;
  checked?: boolean;
  setChecked: (x: boolean) => void;
  checkColor?: string;
  TStyle?: TextStyle;
  style?: ViewStyle;
  uncheckedColor?: string;
}

export default ({
  text,
  checked,
  setChecked,
  checkColor,
  TStyle,
  style,
  uncheckedColor,
}: CheckBoxWithTextProps) => (
  <Pressable
    style={[styles.container, style]}
    onPress={() => setChecked(!checked)}>
    <Checkbox.Android
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => setChecked(!checked)}
      color={checkColor}
      uncheckedColor={uncheckedColor ? uncheckedColor : '#979797'}
    />
    <CustomeText style={[styles.text, TStyle]}>{text}</CustomeText>
  </Pressable>
);
const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginLeft: -7},
  text: {fontSize: 12},
});
