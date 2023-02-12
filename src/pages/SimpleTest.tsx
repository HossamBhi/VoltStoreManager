import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';

const SimpleTest = () => {
  const [text, setText] = useState('');
  const styles = {backgroundColor: 'red'};

  useEffect(() => {
    console.log('It is screen');
  }, []);
  return (
    <View style={styles}>
      <Text testID="textHello">{text}</Text>
      <Pressable testID="helloButton" onPress={() => setText('Hello Test')}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
};

export default SimpleTest;
