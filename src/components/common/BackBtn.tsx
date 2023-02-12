import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from '../pageHeader/Icon';
import {isRTL} from '../../langs';
import {StyleSheet, ViewStyle} from 'react-native';

export default ({style}: {style?: ViewStyle}) => {
  const navigation = useNavigation();
  return (
    <Icon
      name={!isRTL ? 'chevron-left' : 'chevron-right'}
      size={30}
      onPress={() => navigation.canGoBack() && navigation.goBack()}
      style={[styles.icon, style]}
    />
  );
};
const styles = StyleSheet.create({
  icon: {
    shadowColor: '#00000060',
    shadowOffset: {width: 0, height: 5},
    elevation: 10,
  },
});
