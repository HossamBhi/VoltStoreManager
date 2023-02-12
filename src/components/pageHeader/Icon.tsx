import React from 'react';
import CustomeButton from '../common/CustomeButton';
import CustomeIcon, {CustomeIconProps} from '../common/CustomeIcon';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';

interface Icon extends CustomeIconProps {
  onPress?: () => void;
  Tag?: JSX.Element;
  name?: string;
  style?: StyleProp<ViewStyle>;
  newIcon?: JSX.Element;
}

export default ({onPress, newIcon, style, Tag, name, ...props}: Icon) => {
  const {colors} = useTheme();
  return (
    <CustomeButton
      onPress={onPress}
      style={[styles.btn, {backgroundColor: colors.background}, style]}
      icon={
        newIcon ? (
          newIcon
        ) : (
          <CustomeIcon
            style={styles.icon}
            size={22}
            {...{Tag, name, ...props}}
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#00000015',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 0.6,
  },
  icon: {textAlignVertical: 'center'},
});
