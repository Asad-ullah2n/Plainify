import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppPressable from '../constants/AppPressable';

const Icon = ({name, size, color}) => {
  return <MaterailIcon name={name} size={size} color={color} />;
};

export default Icon;

const styles = StyleSheet.create({});
