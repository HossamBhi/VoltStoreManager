import React, {ReactNode} from 'react';
import {
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomeText from './CustomeText';
import {TextProp} from '../../utils/types';

export interface CustomeButtonProps extends TextProp {
  onPress?: any;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  icon?: any;
  children?: ReactNode;
  isOpacity?: boolean;
}

export default ({
  disabled,
  text,
  onPress,
  style,
  textStyle,
  icon,
  children,
  isOpacity,
}: CustomeButtonProps) => {
  const ContainerBtn = isOpacity ? TouchableOpacity : Pressable;
  return (
    <ContainerBtn
      style={[styles.btn, style, disabled && styles.btnDisabled]}
      onPress={onPress}
      disabled={disabled ? true : false}>
      <>
        {text && (
          <CustomeText
            style={[textStyle, disabled && styles.btnTextDisabled]}
            text={text}
          />
        )}
        {icon && icon}
        {children && children}
      </>
    </ContainerBtn>
  );
};

const styles = StyleSheet.create({
  btn: {borderRadius: 10},
  btnDisabled: {backgroundColor: '#B8B8B8'},
  btnTextDisabled: {color: '#FFFFFF'},
});
