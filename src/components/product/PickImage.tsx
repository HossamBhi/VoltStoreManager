import React, {SetStateAction} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import CustomeImage from '../common/CustomeImage';
import CustomeButton from '../common/CustomeButton';
import CustomeIcon from '../common/CustomeIcon';
import {useTheme} from 'react-native-paper';
import {t} from 'i18next';
import {uplaodedImageProps} from '../../utils/types';
import {Dispatch} from 'react';

const ProductImage = ({
  onPress,
  source,
}: {
  source: ImageSourcePropType;
  onPress: () => void;
}) => {
  const {colors} = useTheme();
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.imageCon]}>
      <CustomeImage
        source={source}
        style={[styles.image, {width: width / 3, height: width / 3}]}
      />
      <View style={[styles.overlay, {borderColor: colors.outline}]}>
        <CustomeButton
          onPress={onPress}
          icon={
            <CustomeIcon name="x" style={styles.xIcon} color={colors.error} />
          }
        />
      </View>
    </View>
  );
};

const PickImage = ({
  images,
  onAddImage,
  setImages,
}: {
  images: uplaodedImageProps[];
  onAddImage: () => void;
  setImages: Dispatch<SetStateAction<uplaodedImageProps[]>>;
}) => {
  const {colors} = useTheme();

  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {images?.map(image => (
        <ProductImage
          key={image.id}
          source={{uri: image?.link || image?.src}}
          onPress={() => setImages(images.filter(img => img.id !== image.id))}
        />
      ))}
      <CustomeButton
        text={t('addImage')}
        style={[
          styles.image,
          styles.imageCon,
          styles.addCon,
          {
            width: width / 3,
            height: width / 3,
            borderColor: colors.outline,
          },
        ]}
        onPress={onAddImage}
        icon={<CustomeIcon name="plus" size={50} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  imageCon: {
    borderRadius: 10,
    position: 'relative',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  image: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    height: '100%',
    backgroundColor: '#00000040',
    width: '100%',
    borderRadius: 10,
    alignItems: 'flex-end',
    borderWidth: 1,
  },
  xIcon: {
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 14,
    margin: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  addCon: {
    borderWidth: 1,
    flexDirection: 'column-reverse',
  },
});

export default PickImage;
