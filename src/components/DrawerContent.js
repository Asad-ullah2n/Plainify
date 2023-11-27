import React from 'react';
import {Linking, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {logoutHandler} from '../navigation/AuthNavigation';
import {PRIVACY_CONDITIONS} from './links';

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => Linking.openURL(PRIVACY_CONDITIONS)}
      />
      <DrawerItem
        label="Terms and Conditions"
        onPress={() => Linking.openURL(PRIVACY_CONDITIONS)}
      />
      <DrawerItem label="Logout" onPress={() => logoutHandler()} />
    </DrawerContentScrollView>
  );
}
export default React.memo(DrawerContent);
