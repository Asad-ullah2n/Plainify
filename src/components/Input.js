import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

import {color} from '../constants/color';
import Icon from './Icon';

const Input = ({value, onChangeText, type, icon, ...props}) => {
  return (
    <TextInput
      style={[styles.Input, type === 'thin' ? styles.thin : {}]}
      placeholderTextColor={color.midGrey}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

export default React.memo(Input);

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
  thin: {
    borderWidth: 1,
    borderColor: color.lighGrey,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: color.white,
  },
});
