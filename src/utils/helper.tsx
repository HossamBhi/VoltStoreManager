import React from 'react';
import CustomeIcon, {CustomeIconProps} from '../components/common/CustomeIcon';
import {isRTL} from '../langs';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import moment from 'moment';

// export const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export const PASSWORD_REG = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;

// Angle Icon Multi direction
export const AngleIcon = ({...props}: CustomeIconProps) => (
  <CustomeIcon name={!isRTL ? 'chevron-left' : 'chevron-right'} {...props} />
);

// image picker Start
function imagePickerResult(result: ImagePickerResponse) {
  // console.log({ result: result.assets });
  if (result.assets && result.assets.length > 0) {
    return result.assets[0];
  }

  return null;
}
export const pickImageLibrary = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    presentationStyle: 'popover',
    quality: 0.5,
    // includeBase64: true,
  });
  return imagePickerResult(result);
};

export const pickImageByCamera = async () => {
  const result = await launchCamera({
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: true,
  });
  return imagePickerResult(result);
};
// image picker End
// Time and date
export const getDateFormat = (date: Date) => moment(date).format('L');

export const getTimeAMPM = (date: Date) => moment(date).format('LT');
