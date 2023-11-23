import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppPressable from '../constants/AppPressable';
import {color} from '../constants/color';

const Checkbox = ({checked, onPress}) => {
  return (
    <AppPressable
      style={[styles.container, checked && {borderWidth: 2}]}
      onPress={onPress}>
      {checked ? <View style={styles.innerSqure} /> : null}
    </AppPressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    borderWidth: 3,
    height: 18,
    width: 18,
    borderRadius: 3,
    borderColor: color.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSqure: {
    height: 10,
    width: 10,
    backgroundColor: color.purple,
  },
});
