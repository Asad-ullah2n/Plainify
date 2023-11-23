import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Title from '../../components/Title';
import {horizontalScale} from '../../constants/scalling';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {color} from '../../constants/color';
import AppPressable from '../../constants/AppPressable';
import CheckBox from '@react-native-community/checkbox';
import Checkbox from '../../components/Checkbox';
import {PRIVACY_CONDITIONS} from '../../components/links';

const Signup = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked(val => !val);
  };
  const openLinks = link => {
    Linking.openURL(link);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Title>Join the hub!</Title>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />

        <View style={styles.agreeContainer}>
          <Checkbox checked={isChecked} onPress={handleCheckbox} />
          <Text style={styles.footerText}>I agree to </Text>
          <AppPressable onPress={() => openLinks(PRIVACY_CONDITIONS)}>
            <Text
              style={[styles.footerText, {textDecorationLine: 'underline'}]}>
              Terms and Conditions{' '}
            </Text>
          </AppPressable>

          <Text style={styles.footerText}>and </Text>
          <AppPressable onPress={() => openLinks(PRIVACY_CONDITIONS)}>
            <Text
              style={[styles.footerText, {textDecorationLine: 'underline'}]}>
              Privacy Policy
            </Text>
          </AppPressable>
        </View>
        <Button title={'Create account'} backgroundColor={color.blue} />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <AppPressable onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.footerLink}>Sign in!</Text>
          </AppPressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(15),
  },
  agreeContainer: {
    marginVertical: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    marginVertical: 12,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: color.midGrey,
    fontSize: 14,
  },
  footerLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.purple,
  },
});
