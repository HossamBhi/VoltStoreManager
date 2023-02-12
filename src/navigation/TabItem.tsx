import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomeIcon from '../components/common/CustomeIcon';
import CustomeButton from '../components/common/CustomeButton';

export default function TabItem(props: any) {
  const {colors} = useTheme();
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  return (
    <CustomeButton onPress={onPress} style={styles.container}>
      <>
        <CustomeIcon
          Tag={focused ? item.typeActive : item.typeInActive}
          name={item.icon}
          // name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? '#fff' : colors.text}
          size={20}
          style={[styles.icon, focused && {backgroundColor: colors.primary}]}
        />
        {/* {focused && (
          <CustomeText
            text={item.label}
            style={[styles.text, {color: colors.primary}]}
          />
        )} */}
      </>
    </CustomeButton>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontWeight: '700', fontSizeL: 12},
  icon: {paddingVertical: 8, borderRadius: 10, paddingHorizontal: 10},
});
