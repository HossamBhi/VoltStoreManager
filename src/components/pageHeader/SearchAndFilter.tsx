import React, {RefObject, forwardRef} from 'react';
import CustomeTextInput from '../common/CustomeTextInput';
import CustomeIcon from '../common/CustomeIcon';
import {t} from 'i18next';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from './Icon';

export interface SAndFProps {
  showFilter?: boolean;
  setSearchValue?: (value: string) => void;
  searchValue?: string;
  placeholderSearch?: string;
  onPressFilter?: () => void;
  searchRef?: RefObject<TextInput>;
  onSearchFocus?: () => void;
}

const SearchAndFilter = (
  {
    showFilter = false,
    setSearchValue,
    placeholderSearch,
    searchValue,
    onPressFilter,
    onSearchFocus,
  }: SAndFProps,
  ref: any,
) => (
  <View style={styles.container}>
    <CustomeTextInput
      ref={ref}
      containerStyle={styles.search}
      placeholder={placeholderSearch || t('What are you searching for?') + ''}
      rightPart={<CustomeIcon name="search" size={20} />}
      onChangeText={setSearchValue}
      value={searchValue}
      onFocus={onSearchFocus}
    />
    {showFilter === true && (
      <Icon style={styles.filter} name="filter" onPress={onPressFilter} />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  search: {paddingVertical: 10},
  filter: {marginStart: 8},
});

export default forwardRef(SearchAndFilter);
