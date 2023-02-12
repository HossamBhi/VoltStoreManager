import React, {ReactNode} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomeText from '../common/CustomeText';
import CustomeIcon from '../common/CustomeIcon';
import {DefaultTFuncReturn} from 'i18next';
// import {ReviewProps} from '../../utils/types';
// import LectureCard from './LectureCard';

interface CollapseProps {
  title?: DefaultTFuncReturn | string;
  style?: StyleProp<ViewStyle>;
  // items?: ReviewProps[];
  body?: ReactNode;
  isOpen?: boolean;
  setIsOpen: (x: number) => void;
  id: number;
  titleStyle?: StyleProp<TextStyle>;
}

const Collapse = ({
  id,
  title,
  style,
  body,
  isOpen,
  setIsOpen,
  titleStyle,
}: CollapseProps) => {
  // const [open, setopen] = useState(false);
  const {colors} = useTheme();
  // console.log({isOpen, title});
  return (
    <Pressable
      style={[styles.container, {backgroundColor: colors.surface}, style]}
      onPress={() => body && setIsOpen(id)}>
      <View style={[styles.top]}>
        <CustomeText style={[styles.title, titleStyle]} text={title} />
        <CustomeIcon name={isOpen ? 'chevron-up' : 'chevron-down'} />
      </View>
      {isOpen === true && body}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#00000060',
    shadowOffset: {width: 2, height: 5},

    elevation: 10,
    marginBottom: 20,
    borderRadius: 15,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginTop: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontWeight: '500', fontSize: 16, flex: 1, paddingEnd: 10},
});

export default Collapse;
