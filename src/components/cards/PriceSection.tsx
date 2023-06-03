import React from 'react';
import {useTheme} from 'react-native-paper';
import {StyleSheet, View, ViewStyle} from 'react-native';
import CustomeText from '../common/CustomeText';
import {DefaultTFuncReturn, t} from 'i18next';

interface PriceSectionProps {
  style?: ViewStyle;
  priceConStyle?: ViewStyle;
  oldPrice?: string | number;
  currentPrice?: string | number;
  currency?: DefaultTFuncReturn | string;
  isShowFav?: boolean;
}

export default ({
  oldPrice,
  currency,
  currentPrice,
  style,
  priceConStyle,
}: PriceSectionProps) => {
  const {colors} = useTheme();
  return (
    <View
      style={[styles.container, {borderColor: colors.onSurfaceVariant}, style]}>
      <View style={[priceConStyle]}>
        <CustomeText
          text={t('price')}
          style={[styles.text, {color: colors.onSurfaceVariant}]}
        />
        <View style={styles.row}>
          <CustomeText
            text={`${currentPrice} ${currency}`}
            style={[styles.text, styles.bold]}
          />
          {oldPrice && oldPrice !== currentPrice && (
            <CustomeText
              text={`${oldPrice} ${currency}`}
              style={[styles.text, styles.bold, styles.oldPrice]}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 14,
    paddingBottom: 7,
    paddingTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  },
  row: {flexDirection: 'row', paddingTop: 3},
  text: {fontSize: 12},
  oldPrice: {
    color: '#EF3C3C',
    textDecorationLine: 'line-through',
    paddingHorizontal: 6,
  },
  bold: {fontWeight: '600'},
});
