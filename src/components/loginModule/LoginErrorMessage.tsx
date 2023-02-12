import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import CustomeImage from '../common/CustomeImage';
import {DefaultTFuncReturn} from 'i18next';
import RenderHtmlComponent from '../common/RenderHtmlComponent';

export default ({
  message,
  style,
  hideImage,
}: // TStyle,
{
  message?: string | DefaultTFuncReturn;
  hideImage?: boolean;
  style?: ViewStyle;
  // TStyle?: TextStyle;
}) => (
  <View style={[styles.container, style]}>
    {hideImage !== true && (
      <CustomeImage
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/alert.png')}
      />
    )}
    {/* <CustomeText style={[styles.text, TStyle]}>{message}</CustomeText> */}
    <RenderHtmlComponent html={message + ''} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DC484B',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 15,
    paddingVertical: 13,
    flexDirection: 'row',
    paddingHorizontal: 13,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    maxWidth: 25,
    maxHeight: 25,
    marginEnd: 10,
  },
});
