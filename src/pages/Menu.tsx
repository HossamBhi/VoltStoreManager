import React, {useCallback, useState} from 'react';
import {
  Alert,
  I18nManager,
  Linking,
  ScrollView,
  Share,
  StyleSheet,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNRestart from 'react-native-restart';
import {useTheme} from 'react-native-paper';
import i18n, {t} from 'i18next';
import {CustomizePicker} from 'react-native-single-multi-select-fully-customized';
import {useDispatch, useSelector} from 'react-redux';

import CustomeIcon from '../components/common/CustomeIcon';
import CustomeImage from '../components/common/CustomeImage';
import CustomeText from '../components/common/CustomeText';
import RowComponent from '../components/common/RowComponent';
import CustomeButton from '../components/common/CustomeButton';
import ListItem from '../components/common/ListItem';
import {logOutAction} from '../redux/user';
import {RootState} from '../redux/store';
import CustomeTitle from '../components/common/CustomeTitle';
import {ThemeProps, _getAppLanguages, _getAppThemes} from '../utils/appDB';
import {changeLanguageAction, changeThemeAction} from '../redux/appSettings';
import {ReactNavigationProps} from '../navigation/types';

const MenuTopSection = () => {
  const {colors} = useTheme();
  const {logedUser} = useSelector((state: RootState) => state.user);

  const onShare = async () => {
    try {
      await Share.share({
        message: `${t('nowYouCanFindMe')} ${logedUser?.link}`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={[styles.topSection, {borderBottomColor: colors.outline}]}>
      <CustomeButton
        onPress={onShare}
        icon={<CustomeIcon name="share-2" size={30} />}
        style={styles.topShare}
      />
      <RowComponent
        style={styles.rowTop}
        rightPart={
          <View style={styles.topText}>
            <CustomeTitle text={logedUser?.name} style={styles.userName} />
            <CustomeText
              text={logedUser?.username}
              style={{color: colors.primary}}
            />
          </View>
        }
        leftPart={
          <CustomeImage
            source={{uri: logedUser?.avatar_urls[96]}}
            style={styles.profile}
          />
        }
      />
    </View>
  );
};

const Menu = ({navigation}: ReactNavigationProps) => {
  // const [showLangs, setShowLangs] = useState(false);
  const {activeTheme, activeLanguage} = useSelector(
    (state: RootState) => state.appSettings,
  );
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const [showLanguages, setShowLanguages] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const handleChangeTheme = useCallback(
    (item: ThemeProps) => {
      dispatch(changeThemeAction(item));
    },
    [dispatch],
  );
  const handleChangeLanguage = useCallback(
    (item: ThemeProps) => {
      dispatch(changeLanguageAction(item));
      i18n.changeLanguage(item.value).then(() => {
        if (item.direction === 'rtl') {
          I18nManager.forceRTL(true);
        } else {
          I18nManager.forceRTL(false);
        }

        RNRestart.Restart(); // native
      });
    },
    [dispatch],
  );
  const onShare = async () => {
    try {
      await Share.share({
        message: `${t(
          'beAVendorWithVolt',
        )} https://play.google.com/store/apps/details?id=com.dukkaanyvendors`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView>
      <MenuTopSection />
      <View style={styles.con}>
        <CustomizePicker
          items={_getAppLanguages()}
          visible={showLanguages}
          onRequestClose={() => setShowLanguages(false)}
          onItemPress={handleChangeLanguage}
          selectedValue={activeLanguage?.value}
          renderPlaceholder={() => (
            <ListItem
              header={t('languages')}
              leftPart={
                <CustomeIcon
                  name="globe"
                  style={[
                    styles.backgroundIcon,
                    {backgroundColor: colors.surface},
                  ]}
                  size={20}
                />
              }
              onPress={() => setShowLanguages(true)}
              key={2}
              style={styles.item}
            />
          )}
        />
        <CustomizePicker
          items={_getAppThemes()}
          visible={showThemes}
          onRequestClose={() => setShowThemes(false)}
          onItemPress={handleChangeTheme}
          selectedValue={activeTheme?.value}
          containerStyle={{backgroundColor: colors.background}}
          renderPlaceholder={() => (
            <ListItem
              header={t('themes')}
              leftPart={
                <CustomeIcon
                  Tag={MaterialCommunityIcons}
                  name="theme-light-dark"
                  style={[
                    styles.backgroundIcon,
                    {backgroundColor: colors.surface},
                  ]}
                  size={20}
                />
              }
              onPress={() => setShowThemes(true)}
              key={3}
              style={styles.item}
            />
          )}
        />
        <ListItem
          header={t('contactUs')}
          leftPart={
            <CustomeIcon
              name="phone-call"
              style={[styles.backgroundIcon, {backgroundColor: colors.surface}]}
              size={20}
            />
          }
          onPress={() => Linking.openURL('tel:+201060062431')}
          key={1}
          style={styles.item}
        />
        <ListItem
          header={t('shareApp')}
          leftPart={
            <CustomeIcon
              name="share-2"
              style={[styles.backgroundIcon, {backgroundColor: colors.surface}]}
              size={20}
            />
          }
          onPress={onShare}
          key={'shareApp'}
          style={[styles.item]}
        />
        <CustomeButton
          style={[styles.btn, {backgroundColor: colors.primary}]}
          textStyle={styles.btnText}
          text={t('logout')}
          onPress={() => {
            dispatch(logOutAction());
            navigation.replace('Login');
          }}
          icon={
            <CustomeIcon
              name="log-out"
              style={{transform: [{rotateY: '180deg'}]}}
            />
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  topShare: {alignSelf: 'flex-end'},
  rowTop: {alignItems: 'flex-end'},
  topText: {flex: 1, paddingHorizontal: 10},
  userName: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  profile: {width: 90, height: 90, borderRadius: 10},

  con: {flex: 1, width: '100%', paddingHorizontal: 16, paddingTop: 28},
  item: {
    // paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  backgroundIcon: {
    padding: 6,
    marginEnd: 16,
    borderRadius: 1000,
  },
  btn: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 100,
    marginTop: 20,
  },
  btnText: {fontSize: 16, fontWeight: '500', paddingHorizontal: 18},
});

export default Menu;
