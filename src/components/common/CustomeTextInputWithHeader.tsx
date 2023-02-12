import React from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import CustomeText from './CustomeText';
import CustomeTextInput, {CustomeTextInputProps} from './CustomeTextInput';

const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 4,
    lineHeight: 11,
  },
});

export default ({title, ...props}: CustomeTextInputProps & TextInputProps) => {
  return (
    <View>
      <CustomeText text={title} style={styles.title} />
      <CustomeTextInput {...props} />
    </View>
  );
};
