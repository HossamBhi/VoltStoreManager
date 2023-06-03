import React, {useEffect, useState} from 'react';
import {getAttributesAPI} from '../../utils/APIs';
import CheckBoxWithText from '../common/CheckBoxWithText';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {attributeProps} from '../../utils/types';

const AttributesSection = ({}) => {
  const {logedUser} = useSelector((state: RootState) => state.user);

  const [attrList, setAttrList] = useState<attributeProps[]>([]);
  useEffect(() => {
    if (logedUser) {
      getAttributesAPI(logedUser).then(res => {
        console.log({Attr: res});
        if (Array.isArray(res)) {
          setAttrList(res);
        } else {
          Alert.alert('Error', res?.message);
        }
      });
    }
  }, [logedUser]);

  return (
    <>
      {attrList.map(att => (
        <CheckBoxWithText text={att.name} />
      ))}
    </>
  );
};

export default AttributesSection;
