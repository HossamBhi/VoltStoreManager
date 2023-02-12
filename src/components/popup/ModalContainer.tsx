/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  Pressable,
  useWindowDimensions,
  ModalProps,
} from 'react-native';

const ModalContainer = ({children, onRequestClose, visible}: ModalProps) => {
  const {height} = useWindowDimensions();
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="fade">
      <ScrollView>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View
            style={{
              backgroundColor: '#00000065',
              flex: 1,
              justifyContent: 'center',
              minHeight: height,
            }}>
            <Pressable>{children}</Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Modal>
  );
};

export default ModalContainer;
