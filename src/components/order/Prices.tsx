import React from 'react';
import {useTheme} from 'react-native-paper';
import {StyleSheet, View, ViewStyle} from 'react-native';
import CustomeText from '../common/CustomeText';
import {DefaultTFuncReturn, t} from 'i18next';
import {OrderProps} from '../../utils/types';

interface PriceSectionProps {
  style?: ViewStyle;
  priceConStyle?: ViewStyle;
  oldPrice?: string | number;
  currentPrice?: string | number;
  currency?: DefaultTFuncReturn | string;
  title?: DefaultTFuncReturn;
}

interface PricesProps {
  style?: ViewStyle;
  item: OrderProps;
}

const PriceSection = ({
  oldPrice,
  currency,
  currentPrice,
  style,
  title,
}: PriceSectionProps) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.price, style]}>
      <CustomeText
        text={title}
        style={[styles.text, {color: colors.onSurfaceVariant}]}
      />
      <View style={styles.row}>
        <CustomeText
          text={`${currentPrice} ${currency}`}
          style={[styles.text, styles.bold]}
        />
        {oldPrice !== undefined &&
          Number(oldPrice) > 0 &&
          oldPrice !== currentPrice && (
            <CustomeText
              text={`${oldPrice} ${currency}`}
              style={[styles.text, styles.bold, styles.oldPrice]}
            />
          )}
      </View>
    </View>
  );
};

export default ({style, item}: PricesProps) => {
  const {colors} = useTheme();
  const {currency, total, discount_total, shipping_total} = item;
  const totalCommsion = item.line_items.reduce(
    (prev, curr) => Number(curr.commission_value) + Number(prev),
    0,
  );
  return (
    <View
      style={[styles.container, {borderColor: colors.onSurfaceVariant}, style]}>
      <PriceSection
        title={t('total')}
        currency={currency}
        oldPrice={discount_total}
        currentPrice={total}
      />
      {shipping_total !== '0' && (
        <PriceSection
          title={t('shipping')}
          currency={currency}
          currentPrice={shipping_total}
        />
      )}
      <PriceSection
        title={t('voltComision')}
        currency={currency}
        currentPrice={totalCommsion?.toFixed(2) || 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    borderTopWidth: 0,
    paddingHorizontal: 0,
    paddingTop: 20,
  },
  price: {},
  row: {flexDirection: 'row', paddingTop: 3},
  text: {fontSize: 12},
  oldPrice: {
    color: '#EF3C3C',
    textDecorationLine: 'line-through',
    paddingHorizontal: 6,
  },
  bold: {fontWeight: '600'},
});
