import React, {FC} from 'react';
import {useTheme} from 'react-native-paper';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import CustomeButton from './CustomeButton';
import CustomeText from './CustomeText';

export interface CustomeListItemProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  rightPart?: JSX.Element;
  leftPart?: JSX.Element;
  centerPart?: JSX.Element;
  header?: any;
  notes?: any;
  headerStyle?: StyleProp<TextStyle>;
  notesStyle?: StyleProp<TextStyle>;
}

const ListItem: FC<CustomeListItemProps> = ({
  onPress,
  style,
  rightPart,
  leftPart,
  centerPart,
  header,
  notes,
  headerStyle,
  notesStyle,
}) => {
  const {colors} = useTheme();
  return (
    <CustomeButton onPress={onPress} style={[styles.row, style]}>
      <>
        {leftPart && leftPart}
        {centerPart && centerPart}
        {header && (
          <View style={styles.headerCon}>
            <CustomeText
              style={[styles.header, {color: colors.text}, headerStyle]}
              numberOfLines={2}>
              {header}
            </CustomeText>
            {notes && (
              <CustomeText
                style={[styles.notes, {color: colors.text + '70'}, notesStyle]}>
                {notes}
              </CustomeText>
            )}
          </View>
        )}
        {rightPart && rightPart}
      </>
    </CustomeButton>
  );
};
const styles = StyleSheet.create({
  row: {
    // paddingHorizontal: 16,
    // paddingVertical: 12,
    flexDirection: 'row',
    // width: '100%',
    flex: 1,
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  headerCon: {
    // paddingHorizontal: 12,
    // flex: 1,
    // justifyContent: 'center',
  },
  header: {fontSize: 16},
  notes: {fontSize: 12, paddingTop: 4},
});
export default ListItem;
