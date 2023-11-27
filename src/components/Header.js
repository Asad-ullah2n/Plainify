import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../constants/color';
import AppPressable from '../constants/AppPressable';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title}) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <AppPressable onPress={openDrawer}>
        <MaterialIcon name="menu" color={color.black} size={20} />
      </AppPressable>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  title: {fontSize: 16, fontWeight: '500', color: color.purple},
  icon: {
    width: 24,
    height: 24,
    color: 'black',
  },
});
