import React from 'react';
import CustomeText from '../common/CustomeText';
import {StyleSheet} from 'react-native';

export default ({...props}) => (
  <CustomeText {...props} style={[styles.text, props.style]} />
);

const styles = StyleSheet.create({
  text: {fontSize: 16, fontWeight: '700'},
});
