import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from 'react-native-paper';
import {t} from 'i18next';
import {useFocusEffect} from '@react-navigation/native';

import AppLoader from '../components/common/AppLoader';
import ProductCard from '../components/cards/ProductCard';
import {getAllProductsAPI} from '../utils/APIs';
import {RootState} from '../redux/store';
import PageHeader from '../components/pageHeader';
import {ProductProps} from '../utils/types';
import {ReactNavigationProps} from '../navigation/types';
import Error from '../components/common/Error';

const per_page = 100;
const Products = ({navigation, route}: ReactNavigationProps) => {
  const [products, setProducts] = useState<ProductProps[] | null | undefined>(
    null,
  );
  const {logedUser} = useSelector((state: RootState) => state.user);
  const {colors} = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  // const [pageid, setPageId] = useState(1);
  // const [noMoreData, setNoMoreData] = useState(false);
  // const [loadMore, setLoadMore] = useState(false);
  // console.log({logedUser});
  const getAllProducts = useCallback(() => {
    if (logedUser) {
      getAllProductsAPI({
        ...logedUser,
        searchValue,
        per_page,
        page: 1,
      }).then(({data}) => {
        console.log({data});
        if (!data.message) {
          setErrorMsg(null);
          setProducts(data);
        } else {
          setProducts([]);
          setErrorMsg(data.message);
        }
        setRefreshing(false);
      });
    }
  }, [logedUser, searchValue]);

  useFocusEffect(
    useCallback(() => {
      setProducts(null);
      getAllProducts();
    }, [getAllProducts]),
  );

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts, route]);

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.primary);
    StatusBar.setBarStyle('light-content');
  }, [colors]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllProducts();
  }, [getAllProducts]);

  if (products === null) {
    return <AppLoader />;
  }

  return (
    <View style={styles.container}>
      <PageHeader
        showMenu={false}
        style={[styles.header, {backgroundColor: colors.primary}]}
        headerStyle={styles.headerText}
        showLogo={false}
        header={t('products')}
        onPressCart={() => navigation.navigate('ProductDetails')}
        {...{searchValue, setSearchValue}}
      />
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flex: errorMsg ? 1 : 0}}
        ListEmptyComponent={errorMsg && <Error text={errorMsg} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={products?.filter(p =>
          p.name.toLowerCase()?.includes(searchValue.toLocaleLowerCase()),
        )}
        keyExtractor={item => item.id + ''}
        renderItem={({item}) => (
          <ProductCard
            item={item}
            onPress={() =>
              navigation.navigate('ProductDetails', {product: item})
            }
          />
        )}
        // onEndReached={!noMoreData && loadMoreData}
        // onEndReachedThreshold={0.5}
        // ListFooterComponent={<AppLoader />}
      />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {marginBottom: 10},
  headerText: {textAlign: 'center', color: '#fff'},
  logout: {
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#00000015',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 0.6,
    flexDirection: 'row',
  },
  logOutText: {paddingEnd: 4},
});

export default Products;
