import React, {useState} from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';

export default ({source, style, resizeMode, ...props}: ImageProps) => {
  const [imageUrl, setImageUrl] = useState(source);

  return (
    <Image
      testID="image"
      source={imageUrl}
      style={[styles.image, style]}
      resizeMode={resizeMode}
      onError={() => setImageUrl(require('../../assets/logo.png'))}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  image: {minWidth: 30, minHeight: 30},
});
