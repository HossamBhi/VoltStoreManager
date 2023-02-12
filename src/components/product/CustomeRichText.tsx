import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import CustomeText from '../common/CustomeText';
import {DefaultTFuncReturn} from 'i18next';
import {useTheme} from 'react-native-paper';

const CustomeRichText = ({
  title,
  onChangeText,
  value,
}: {
  title: string | DefaultTFuncReturn;
  onChangeText?: (text: string) => void;
  value?: string;
}) => {
  const richText = React.useRef<RichEditor>(null);
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <CustomeText text={title} style={styles.title} />
      <RichEditor
        initialContentHTML={value}
        androidLayerType="software"
        androidHardwareAccelerationDisabled={true}
        editorStyle={{backgroundColor: colors.surfaceVariant}}
        ref={richText}
        onChange={onChangeText}
        placeholder={title + ''}
        style={[
          styles.container,
          styles.input,
          {backgroundColor: colors.surfaceVariant},
        ]}
      />

      <RichToolbar
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.undo,
          actions.redo,
        ]}
        style={{backgroundColor: colors.surfaceVariant}}
        selectedIconTint={colors.primary}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 4,
    lineHeight: 11,
  },
  container: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 15,
  },
  input: {flex: 1, fontSize: 14, paddingHorizontal: 10},
});
export default CustomeRichText;
