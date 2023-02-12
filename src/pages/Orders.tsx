import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {t} from 'i18next';
import {useSelector} from 'react-redux';
import {useTheme} from 'react-native-paper';

import AppLoader from '../components/common/AppLoader';
import {getOrdersAPI} from '../utils/APIs';
import {RootState} from '../redux/store';
import PageHeader from '../components/pageHeader';
import {OrderProps} from '../utils/types';
import {ReactNavigationProps} from '../navigation/types';
import OrderCard from '../components/cards/OrderCard';
import {useFocusEffect} from '@react-navigation/native';
import Error from '../components/common/Error';

const Orders = ({navigation}: ReactNavigationProps) => {
  const [orders, setOrders] = useState<OrderProps[] | null>(null);
  const {logedUser} = useSelector((state: RootState) => state.user);
  const {colors} = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const getAllOrders = useCallback(() => {
    if (logedUser) {
      getOrdersAPI(logedUser).then(({data}) => {
        // console.log({result});
        if (!data.error) {
          setErrorMsg(null);
          setOrders(data);
        } else {
          setOrders([]);
          setErrorMsg(data.message);
        }
        setRefreshing(false);
      });
    }
  }, [logedUser]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllOrders();
  }, [getAllOrders]);

  useFocusEffect(
    useCallback(() => {
      setOrders(null);
      getAllOrders();
    }, [getAllOrders]),
  );

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.primary);
    StatusBar.setBarStyle('light-content');
  }, [colors]);

  if (orders === null) {
    return <AppLoader />;
  }

  return (
    <View style={styles.container}>
      <PageHeader
        style={[styles.header, {backgroundColor: colors.primary}]}
        showLogo={false}
        header={t('orders')}
        showCart={false}
        showMenu={false}
        headerStyle={styles.headerText}
        onPressCart={() => navigation.navigate('ProductDetails')}
        {...{searchValue, setSearchValue}}
      />
      <FlatList
        contentContainerStyle={errorMsg ? styles.error : styles.list}
        ListEmptyComponent={errorMsg && <Error text={errorMsg} />}
        data={orders?.filter(
          p =>
            p.id?.toString()?.includes(searchValue.toLocaleLowerCase()) ||
            p.line_items.find(ite =>
              ite?.name?.includes(searchValue.toLocaleLowerCase()),
            ),
        )}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => <OrderCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  error: {flex: 1},
  list: {paddingBottom: 20, flex: 0},
  header: {marginBottom: 10},
  headerText: {flex: 1, textAlign: 'center', color: '#fff'},
});

export default Orders;
