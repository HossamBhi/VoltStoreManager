import React, {ReactNode} from 'react';
import CustomeImage from '../common/CustomeImage';
import {
  ImageRequireSource,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from './Icon';
import CustomeText from '../common/CustomeText';
import {DefaultTFuncReturn} from 'i18next';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../navigation/types';

export type TopSectionProps = {
  topSeactionStyle?: StyleProp<ViewStyle>;
  showMenu?: boolean;
  showCart?: boolean;
  showLogo?: boolean;
  showClose?: boolean;
  header?: DefaultTFuncReturn | string;
  onPressMenu?: () => void;
  onPressCart?: () => void;
  onPressClose?: () => void;
  logoImage?: ImageRequireSource;
  customeLeftIcon?: JSX.Element;
  customeRightIcon?: JSX.Element;
  headerStyle?: TextStyle;
  customeCenterPart?: ReactNode;
};
export const AppLogo = ({logoImage}: {logoImage?: ImageRequireSource}) => (
  <View style={styles.logoCon}>
    <CustomeImage
      source={logoImage || require('../../assets/logo.png')}
      style={styles.image}
      resizeMode="center"
    />
  </View>
);

export default ({
  topSeactionStyle,
  showMenu = true,
  showCart = true,
  showLogo = true,
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
}: TopSectionProps) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View style={[styles.container, topSeactionStyle]}>
      {customeLeftIcon}
      {customeCenterPart}
      {showMenu && (
        <Icon
          name="chevron-left"
          onPress={onPressMenu ? onPressMenu : () => navigation.goBack()}
        />
      )}
      {showLogo && <AppLogo logoImage={logoImage} />}
      {header && (
        <CustomeText text={header} style={[styles.header, headerStyle]} />
      )}
      {showCart && <Icon name="plus" onPress={onPressCart} />}
      {showClose && <Icon name="x" onPress={onPressClose} />}
      {customeRightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 22,
    alignItems: 'center',
  },
  logoCon: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {width: 120, height: 50},
  header: {fontSize: 26, fontWeight: '700'},
});
