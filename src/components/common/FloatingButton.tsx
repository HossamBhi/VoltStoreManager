import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomeButton, {CustomeButtonProps} from '../common/CustomeButton';
import CustomeIcon from '../common/CustomeIcon';

export default ({onPress, text, icon, style, ...props}: CustomeButtonProps) => {
  const {colors} = useTheme();
  return (
    <CustomeButton
      icon={icon || <CustomeIcon name="plus" color="#ffffff" />}
      text={text}
      onPress={onPress}
      style={[styles.btn, {backgroundColor: colors.primary}, style]}
      textStyle={[styles.btnText]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 30,
    right: 16,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 12,
    paddingHorizontal: 4,
    fontWeight: '700',
  },
});
