import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../constants/color';
import {verticalScale} from '../constants/scalling';

const Button = ({onPress, title, backgroundColor, style}) => {
  return (
    <Pressable
      style={({pressed}) => [
        pressed && styles.pressed,
        styles.button,
        backgroundColor
          ? {backgroundColor: backgroundColor}
          : {backgroundColor: color.purple},
        style,
      ]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    padding: verticalScale(4),
    marginVertical: verticalScale(10),
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: color.white,
  },
  pressed: {
    opacity: 0.7,
  },
});
