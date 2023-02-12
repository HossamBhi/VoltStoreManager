import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';
import {OrderProps} from '../../utils/types';
import CustomeButton from '../common/CustomeButton';
import CustomeTitle from '../common/CustomeTitle';
import RowComponent from '../common/RowComponent';
import CustomeText from '../common/CustomeText';
import {t} from 'i18next';
import Prices from '../order/Prices';
import {getDateFormat, getTimeAMPM} from '../../utils/helper';

interface OrderCardProps {
  style?: ViewStyle;
  item: OrderProps;
  onPress?: () => void;
}

const OrderCard = ({item, style, onPress}: OrderCardProps) => {
  const {colors} = useTheme();
  const CartItem = ({
    price,
    quantity,
    name,
    currency,
  }: {
    price: string | number;
    quantity?: string | number;
    name?: string | number;
    currency?: string | number;
  }) => (
    <RowComponent
      style={styles.cartItem}
      rightPart={
        <CustomeText
          text={quantity}
          style={[styles.quantity, {backgroundColor: colors.primary + '80'}]}
        />
      }
      centerPart={<CustomeText text={name} style={styles.itemName} />}
      leftPart={
        <CustomeText text={price + ' ' + currency} style={styles.price} />
      }
    />
  );

  return (
    <CustomeButton
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.surface}, style]}>
      <>
        <View style={styles.rightPart}>
          <RowComponent
            style={styles.idCon}
            leftPart={
              <CustomeTitle text={'#' + item?.vendor_order_details.order_id} />
            }
            rightPart={
              <CustomeText
                text={item?.status}
                style={[
                  styles.tag,
                  {
                    backgroundColor:
                      item.status === 'completed' ||
                      item.status === 'driver-assigned'
                        ? colors.tertiary
                        : colors.primary,
                  },
                ]}
              />
            }
          />

          {[...item.line_items].map(ele => (
            <CartItem {...ele} currency={item.currency} key={ele.id} />
          ))}
          <Prices item={item} />
          <RowComponent
            style={styles.date}
            leftPart={<CustomeText text={t('createdDate')} />}
            rightPart={
              <CustomeText
                text={
                  getDateFormat(new Date(item?.date_created || 1)) +
                  ' , ' +
                  getTimeAMPM(new Date(item?.date_created || 1))
                }
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
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    marginHorizontal: 10,
    elevation: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  rightPart: {flex: 1},
  idCon: {paddingBottom: 10},
  tag: {
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 2,
    textTransform: 'uppercase',
    color: '#fff',
  },
  date: {paddingTop: 16},
  cartItem: {paddingTop: 10, alignItems: 'flex-start'},
  quantity: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  itemName: {paddingStart: 12, flex: 1, paddingEnd: 6, textAlign: 'right'},
  price: {fontSize: 10},
});
export default OrderCard;
