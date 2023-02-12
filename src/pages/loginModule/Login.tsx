/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, ScrollView, useWindowDimensions, StyleSheet} from 'react-native';
import {t} from 'i18next';
import {useTheme} from 'react-native-paper';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';

import PageHeader from '../../components/pageHeader';
import BlockBtn from '../../components/common/BlockBtn';
import CustomeIcon from '../../components/common/CustomeIcon';
import CustomeTextInputWithHeader from '../../components/common/CustomeTextInputWithHeader';
import {ReactNavigationProps} from '../../navigation/types';
import CustomeImage from '../../components/common/CustomeImage';
import {getUserDataAPI} from '../../utils/APIs';
import LoginErrorMessage from '../../components/loginModule/LoginErrorMessage';
import {setLogedUserAction} from '../../redux/user';
import AppLoader from '../../components/common/AppLoader';
import {RootState} from '../../redux/store';

interface LoginFields {
  username: string;
  password: string;
}

const Login = ({navigation, route}: ReactNavigationProps) => {
  const {height} = useWindowDimensions();
  const dispatch = useDispatch();
  const {logedUser} = useSelector((state: RootState) => state.user);
  const {colors} = useTheme();
  const [loader, setLoaderStatus] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  // const [values, setValues] = useState<LoginFields>({
  //   username: 'alsaaidmarket3@gmail.com',
  //   password: 'alsaaid#market3',
  // });

  const [values, setValues] = useState<LoginFields>({
    username: '',
    password: '',
    // username: 'badrgreenmarket@gmail.com',
    // password: 'badr@greenmarket2',
  });

  useEffect(() => {
    if (logedUser) {
      navigation.replace('BottomTabs');
    } else {
      setLoaderStatus(false);
    }
  }, [navigation, logedUser, route]);

  const createAccountSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .required(t('Required') + ''),
    password: Yup.string().required(t('Required') + ''),
  });

  // const loginResultHandler = (result: any) => {
  //   // console.log('Login result: ', result);
  //   if (!result.error) {
  //     getUserDataAPI(values).then(data => {
  //       if (!data.error) {
  //         dispatch(setLogedUserAction({...data, ...values}));
  //         navigation.replace('BottomTabs');
  //       } else if (result.message) {
  //         setValidationError(result.message);
  //       } else {
  //         setValidationError(result.error);
  //       }
  //       setLoaderStatus(false);
  //     });
  //   } else {
  //     if (result.message) {
  //       setValidationError(result.message);
  //     } else {
  //       setValidationError(result.error);
  //     }
  //     setLoaderStatus(false);
  //   }
  // };

  const handleOnSubmit = (fieldsVal: LoginFields) => {
    setValues(fieldsVal);
    setLoaderStatus(true);
    // postLoginAPI(fieldsVal).then(loginResultHandler);
    getUserDataAPI(fieldsVal).then(({data}) => {
      // console.log({data: data.name});
      if (!data.error) {
        dispatch(setLogedUserAction({...data, ...fieldsVal}));
        navigation.replace('BottomTabs');
      } else if (data.message) {
        setValidationError(data.message);
        setLoaderStatus(false);
      }
    });
  };

  if (loader) {
    return <AppLoader />;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 30,
      }}>
      <View style={{minHeight: height - 250}}>
        <PageHeader
          showCart={false}
          showSearchFilter={false}
          showMenu={false}
          showLogo={false}
          customeCenterPart={
            <CustomeImage
              source={require('../../assets/volt.png')}
              style={{flex: 1, width: 120, height: 90}}
              resizeMode="center"
            />
          }
          showClose={false}
          style={styles.pageHeader}
        />
        {validationError && <LoginErrorMessage message={validationError} />}
        {/* <IntroPage title={t('loginIntroTitle')} style={{paddingBottom: 70}} /> */}
        <View style={styles.formStyle}>
          <Formik
            initialValues={values}
            onSubmit={handleOnSubmit}
            validationSchema={createAccountSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values: formValues,
              errors,
            }) => (
              <View>
                <CustomeTextInputWithHeader
                  placeholder={t('usernameOrEmail') + ''}
                  onChangeText={handleChange('username')}
                  value={formValues.username}
                  onBlur={handleBlur('username')}
                  title={t('usernameOrEmail')}
                  containerStyle={[errors.username ? styles.error : {}]}
                  returnKeyType="next"
                  keyBoardType="email-address"
                  leftPart={
                    <CustomeIcon
                      name="mail"
                      size={20}
                      color={colors.onSurfaceVariant}
                    />
                  }
                />
                <CustomeTextInputWithHeader
                  placeholder={t('password') + ''}
                  onChangeText={handleChange('password')}
                  value={formValues.password}
                  onBlur={handleBlur('password')}
                  title={t('password')}
                  containerStyle={[errors.password ? styles.error : {}]}
                  secureTextEntry={formValues.password.length > 0}
                  leftPart={
                    <CustomeIcon
                      name="lock"
                      size={20}
                      color={colors.onSurfaceVariant}
                    />
                  }
                />

                <BlockBtn
                  text={t('login')}
                  onPress={handleSubmit}
                  style={{marginTop: 30}}
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  pageHeader: {paddingLeft: 0, marginHorizontal: 16, paddingBottom: 70},
  confirmBtn: {marginTop: 40},
  error: {borderColor: '#DC484B', borderWidth: 1},
  formStyle: {paddingHorizontal: 16},
});

export default Login;
