/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import ModalContainer from './ModalContainer';
import {useTheme} from 'react-native-paper';
import CustomeImage from '../common/CustomeImage';
import CustomeText from '../common/CustomeText';
import {DefaultTFuncReturn, t} from 'i18next';
import CustomeButton from '../common/CustomeButton';

const ConfirmationModal = ({
  visible,
  message,
  showImage = true,
  confirmPress,
  onRequestClose,
}: {
  visible?: boolean;
  message?: string | DefaultTFuncReturn;
  showImage?: boolean;
  confirmPress: () => void;
  onRequestClose: () => void;
}) => {
  const {colors} = useTheme();
  return (
    <ModalContainer visible={visible} onRequestClose={onRequestClose}>
      <View
        style={{
          backgroundColor: colors.background,
          margin: 15,
          borderColor: '#707070',
          borderRadius: 20,
          paddingHorizontal: 17,
          paddingTop: showImage === true ? 30 : 54,
          paddingBottom: 40,
        }}>
        <Pressable style={{width: '100%'}}>
          {showImage === true && (
            <CustomeImage
              source={require('../../assets/delete.png')}
              style={{alignSelf: 'center', marginBottom: 23}}
            />
          )}
          <CustomeText
            style={{
              textAlign: 'center',
              fontSize: 16,
              paddingBottom: 28,
              lineHeight: 23,
            }}
            text={message}
          />
          <View style={styles.btnCon}>
            <CustomeButton
              text={t('deleteConfirm')}
              onPress={confirmPress}
              style={[styles.btn, {backgroundColor: colors.primary}]}
              textStyle={[styles.btnText]}
            />
            <CustomeButton
              text={t('cancelConfirm')}
              onPress={onRequestClose}
              style={[styles.btn, {backgroundColor: colors.onSurfaceVariant}]}
              textStyle={[styles.btnText, {color: '#232323'}]}
            />
          </View>
        </Pressable>
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  btnCon: {flexDirection: 'row', width: '100%', justifyContent: 'center'},
  btn: {
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 8,
    paddingHorizontal: 30,
  },
  btnText: {
    fontWeight: '500',
  },
});

export default ConfirmationModal;
