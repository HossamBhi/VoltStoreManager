import React from 'react';
import {StyleSheet} from 'react-native';
import {Checkbox, useTheme} from 'react-native-paper';
import CustomeButton from '../common/CustomeButton';
import CustomeText from '../common/CustomeText';

const CatItem = ({
  name,
  checked,
  onPress,
}: {
  name?: string;
  checked?: boolean;
  onPress: () => void;
}) => {
  const {colors} = useTheme();
  return (
    <CustomeButton style={[styles.container]} onPress={onPress}>
      <CustomeText style={[styles.label]} text={name} />
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={onPress}
        color={colors.primary}
        uncheckedColor="#333333"
      />
    </CustomeButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: -2,
  },
  label: {flex: 1, paddingHorizontal: 10, fontSize: 16},
});

export default CatItem;
