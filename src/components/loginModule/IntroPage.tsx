import React from 'react';
import CustomeText from '../common/CustomeText';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {TextProp} from '../../utils/types';

export default ({
  style,
  title,
  note,
  image,
}: {style?: StyleProp<ViewStyle>; image?: JSX.Element} & TextProp) => {
  return (
    <View style={[styles.container, style]}>
      {image ? image : <CustomeText text={title} style={styles.title} />}
      {note && <CustomeText text={note} style={styles.note} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: '10%',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  note: {
    color: '#B8B8B8',
    textAlign: 'center',
    paddingTop: 16,
  },
});
