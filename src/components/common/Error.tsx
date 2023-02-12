import React from 'react';
import {ViewStyle, StyleProp, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomeIcon from './CustomeIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomeText from './CustomeText';
// import RenderHtmlComponent from './RenderHtmlComponent';

export default ({
  style,
  text,
}: {
  style?: StyleProp<ViewStyle>;
  text?: string;
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, style]}>
      <CustomeIcon
        Tag={Ionicons}
        name="ios-warning"
        size={100}
        color={colors.error}
      />
      <CustomeText
        text={text}
        style={[styles.message, {color: colors.error}]}
      />
      {/* <RenderHtmlComponent
        html="message"
        style={[styles.message, {color: colors.error}]}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  message: {fontWeight: 'bold', fontSize: 18},
});
