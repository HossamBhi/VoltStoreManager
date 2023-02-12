import React from 'react';
import {StyleSheet} from 'react-native';
import CustomeButton, {CustomeButtonProps} from './CustomeButton';
import {useTheme} from 'react-native-paper';

export default ({...props}: CustomeButtonProps) => {
  const {colors} = useTheme();
  return (
    <CustomeButton
      {...props}
      style={[styles.btn, {backgroundColor: colors.primary}, props.style]}
      textStyle={[styles.btnText, props.textStyle]}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 17,
    borderRadius: 10,
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontWeight: '700'},
});
