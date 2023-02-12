import React from 'react';
import {
  ActivityIndicator,
  Platform,
  ViewStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomeText from './CustomeText';

export default ({
  style,
  text,
}: {
  style?: StyleProp<ViewStyle>;
  text?: string;
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 50}
        color={colors.primary}
        animating
      />
      {text && <CustomeText text={text} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
