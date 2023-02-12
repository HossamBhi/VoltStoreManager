import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductProps} from '../utils/types';

export type RootStackParamList = {
  Login: undefined;
  BottomTabs: undefined;
  Menu: undefined;
  Products: undefined;
  ProductDetails: undefined | {product: ProductProps};
};
export type ReactNavigationProps = NativeStackScreenProps<RootStackParamList>;
export type ProductDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;
export type ScreenNavigationProp = ReactNavigationProps['navigation'];
export type ScreenRouteProp = ReactNavigationProps['route'];
