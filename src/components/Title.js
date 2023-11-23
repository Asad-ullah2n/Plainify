import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../constants/color';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default React.memo(Title);

const styles = StyleSheet.create({
  title: {
    color: color.black,
    marginVertical: 24,
    fontSize: 28,
    fontWeight: 'bold ',
  },
});
