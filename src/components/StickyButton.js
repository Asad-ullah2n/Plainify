import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../constants/color';
import AppPressable from '../constants/AppPressable';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const StickyButton = () => {
  const navigation = useNavigation();
  return (
    <AppPressable onPress={() => console.log('preesesddfsdf')}>
      <Pressable
        onPress={() => navigation.navigate('Add task')}
        style={styles.container}>
        <MaterialIcon name="plus" size={20} />
      </Pressable>
    </AppPressable>
  );
};

export default React.memo(StickyButton);

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.blue,
    position: 'absolute',

    right: 24,
    bottom: 24,
  },
  button: {
    marginTop: -2,
    fontWeight: '900',
    fontSize: 20,
  },
});
