import React, {useEffect, useState} from 'react';
import {useTheme} from 'react-native-paper';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {t} from 'i18next';

import {categroyProps, smallCatProp} from '../../utils/types';
import {getCategoriesAPI} from '../../utils/APIs';
import CustomePicker from '../picker/CustomePicker';
import {RootState} from '../../redux/store';
import Collapse from '../common/Collapse';
import CatItem from './CatItem';
import PageHeader from '../pageHeader';

const Categories = ({
  selectedCat,
  setSelectedCat,
}: {
  selectedCat: smallCatProp[];
  setSelectedCat: (arr: smallCatProp[]) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const {colors} = useTheme();
  const [catList, setCatList] = useState<categroyProps[]>([]);
  const {logedUser} = useSelector((state: RootState) => state.user);
  const [openCollapse, setOpenCollapse] = useState(0);
  useEffect(() => {
    if (logedUser) {
      getCategoriesAPI(logedUser).then(res => {
        // console.log({categories: res});
        if (Array.isArray(res)) {
          setCatList(res);
        } else {
          Alert.alert('Error', res?.message);
        }
      });
    }
  }, [logedUser]);

  return (
    <CustomePicker
      visible={visible}
      onRequestClose={() => setVisible(false)}
      items={catList.filter(cat => cat.parent === 0)}
      containerStyle={styles.con}
      overlayStyle={styles.overlay}
      isTopBar
      placeholderOnpress={() => setVisible(true)}
      placeholder={`${
        selectedCat.length > 0
          ? selectedCat.map(s => s.name)
          : t('selectCategory')
      }`}
      renderTopBar={() => (
        <PageHeader
          style={{backgroundColor: colors.primary}}
          showSearchFilter={false}
          showCart={false}
          showLogo={false}
          showClose
          showMenu={false}
          header={t('categories')}
          headerStyle={styles.header}
          onPressClose={() => setVisible(false)}
        />
      )}
      renderItems={(items: categroyProps[]) => {
        return (
          <FlatList
            data={items}
            keyExtractor={item => item.id + ''}
            renderItem={({item}) => (
              <Collapse
                setIsOpen={id =>
                  setOpenCollapse(openCollapse === item.id ? 0 : id)
                }
                id={item.id}
                isOpen={openCollapse === item.id}
                title={item.name}
                style={[styles.collapse, {borderBottomColor: colors.outline}]}
                titleStyle={styles.collapseTitle}
                body={
                  <View>
                    {catList.map(cat => {
                      if (item.id === Number(cat.parent)) {
                        return (
                          <CatItem
                            name={cat.name}
                            onPress={() => {
                              const find = selectedCat.find(
                                (sel: smallCatProp) => sel.id === cat.id,
                              );
                              if (!find) {
                                setSelectedCat([...selectedCat, cat]);
                              } else {
                                setSelectedCat(
                                  selectedCat?.filter(
                                    (sel: smallCatProp) => sel.id !== cat.id,
                                  ) || [],
                                );
                              }
                            }}
                            checked={
                              selectedCat.find(
                                (sel: smallCatProp) =>
                                  sel.id === Number(cat.id),
                              )
                                ? true
                                : false
                            }
                          />
                        );
                      }
                    })}
                  </View>
                }
              />
            )}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  con: {maxHeight: '100%', height: '100%', borderRadius: 0},
  overlay: {paddingHorizontal: 0},
  collapse: {
    borderRadius: 0,
    elevation: 0,
    marginBottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 0,
    borderBottomWidth: 1,
  },
  collapseTitle: {fontWeight: 'bold'},
  header: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
  },
});
export default Categories;
