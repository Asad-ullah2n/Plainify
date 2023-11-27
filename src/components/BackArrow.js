import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from './Icon';
import {color} from '../constants/color';
import AppPressable from '../constants/AppPressable';
import {useNavigation} from '@react-navigation/native';

const BackArrow = ({name, size, color}) => {
  const navigation = useNavigation();
  return (
    <AppPressable onPress={() => navigation.goBack()}>
      <Icon name={name} size={size} color={color} />
    </AppPressable>
  );
};

export default BackArrow;

const styles = StyleSheet.create({});
