import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppPressable = ({children, onPress, style}) => {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressable, style]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default AppPressable;

const styles = StyleSheet.create({
  pressable: {
    opacity: 0.7,
  },
});
