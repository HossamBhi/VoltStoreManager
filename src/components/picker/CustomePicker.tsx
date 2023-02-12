import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  CustomizePicker,
  CustomizePickerProps,
} from 'react-native-single-multi-select-fully-customized';

const CustomePicker = ({...props}: typeof CustomizePickerProps) => {
  const {colors} = useTheme();
  return (
    <CustomizePicker
      containerPlaceholderStyle={[
        styles.container,
        {backgroundColor: colors.surfaceVariant},
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    flex: 1,
    fontSize: 14,
    marginTop: 16,
  },
});

export default CustomePicker;
