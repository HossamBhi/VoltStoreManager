import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomeImage from '../common/CustomeImage';
import {ProductProps} from '../../utils/types';
import CustomeButton from '../common/CustomeButton';
import CustomeTitle from '../common/CustomeTitle';
import PriceSection from './PriceSection';
import {t} from 'i18next';
import RenderHtmlComponent from '../common/RenderHtmlComponent';
import CustomeText from '../common/CustomeText';
import RowComponent from '../common/RowComponent';

interface ProductCardProps {
  style?: ViewStyle;
  item?: ProductProps;
  onPress?: () => void;
}

const ProductCard = ({item, style, onPress}: ProductCardProps) => {
  const {colors} = useTheme();
  if (item?.status === 'trash') {
    return null;
  }
  return (
    <CustomeButton
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.surface}, style]}>
      <>
        <CustomeImage
          style={[styles.image]}
          source={
            item?.images[0]['2048x2048']
              ? {uri: item?.images[0]['2048x2048']}
              : require('../../assets/logo.png')
          }
        />
        <View style={styles.rightPart}>
          <CustomeTitle text={item?.name} />
          <RenderHtmlComponent
            html={item?.description}
            textColor={colors.onSurfaceVariant}
          />
          <RowComponent
            style={styles.tagCon}
            leftPart={
              <PriceSection
                currency={t('LE')}
                currentPrice={item?.price}
                oldPrice={item?.regular_price}
                style={styles.priceSection}
                priceConStyle={styles.priceCon}
              />
            }
            rightPart={
              <CustomeText
                text={item?.status}
                style={[
                  styles.tag,
                  {
                    backgroundColor:
                      item?.status === 'publish' ||
                      item?.status === 'driver-assigned'
                        ? colors.tertiary
                        : colors.primary,
                  },
                ]}
              />
            }
          />
        </View>
      </>
    </CustomeButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 14,
    borderRadius: 15,
    shadowColor: '#00000060',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    marginHorizontal: 10,
    elevation: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  rightPart: {flex: 1, paddingStart: 14},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 8,
    alignItems: 'center',
  },
  detailsSection: {paddingBottom: 8, paddingHorizontal: 14},
  des: {fontSize: 12, lineHeight: 15, fontWeight: '400', flex: 1},
  priceSection: {borderTopWidth: 0, paddingHorizontal: 0},
  priceCon: {justifyContent: 'space-between', flex: 1, flexDirection: 'row'},
  tagCon: {
    alignItems: 'center',
  },
  tag: {
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 2,
    textTransform: 'uppercase',
    color: '#fff',
    marginStart: 16,
  },
});
export default ProductCard;
