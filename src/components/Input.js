import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

import {color} from '../constants/color';

const Input = ({...props}) => {
  return (
    <TextInput
      style={styles.Input}
      placeholderTextColor={color.midGrey}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  Input: {
    backgroundColor: color.lighGrey,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 15,
    borderRadius: 10,
    marginVertical: 12,
    color: color.black,
  },
});
