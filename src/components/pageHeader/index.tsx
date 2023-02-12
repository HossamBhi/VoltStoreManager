import React, {forwardRef} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import TopSection, {TopSectionProps} from './TopSection';
import SearchAndFilter, {SAndFProps} from './SearchAndFilter';

export interface PageHeaderProps {
  style?: StyleProp<ViewStyle>;
  showSearchFilter?: boolean;
}

const PageHeader = (
  {
    style,
    showSearchFilter = true,
    // Top section
    topSeactionStyle,
    showMenu,
    showCart,
    showLogo,
    showClose = false,
    header,
    onPressMenu,
    onPressCart,
    onPressClose,
    logoImage,
    customeLeftIcon,
    customeRightIcon,
    headerStyle,
    customeCenterPart,
    // search and filter
    showFilter,
    setSearchValue,
    placeholderSearch,
    searchValue,
    onPressFilter,
    onSearchFocus,
  }: SAndFProps & TopSectionProps & PageHeaderProps,
  ref: any,
) => {
  //   const {colors} = useTheme();
  return (
    <View style={[styles.container, style]}>
      <TopSection
        {...{
          topSeactionStyle,
          showMenu,
          showCart,
          showLogo,
          showClose,
          header,
          onPressMenu,
          onPressCart,
          onPressClose,
          logoImage,
          customeLeftIcon,
          customeRightIcon,
          headerStyle,
          customeCenterPart,
        }}
      />
      {showSearchFilter === true && (
        <SearchAndFilter
          {...{
            showFilter,
            setSearchValue,
            placeholderSearch,
            searchValue,
            onPressFilter,
            ref,
            onSearchFocus,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingVertical: 22, paddingHorizontal: 16},
});

export default forwardRef(PageHeader);
