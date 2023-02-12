import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import CustomeButton from './CustomeButton';

export interface RowComponentProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  rightPart?: JSX.Element;
  leftPart?: JSX.Element;
  centerPart?: JSX.Element;
  isBtn?: boolean;
}

const RowComponent: FC<RowComponentProps> = ({
  onPress,
  style,
  rightPart,
  leftPart,
  centerPart,
  isBtn,
}) => {
  const Container = isBtn ? CustomeButton : View;
  return (
    <Container onPress={onPress} style={[styles.row, style]}>
      <>
        {leftPart && leftPart}
        {centerPart && centerPart}
        {rightPart && rightPart}
      </>
    </Container>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default RowComponent;
