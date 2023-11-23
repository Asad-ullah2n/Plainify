import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/Title';
import {horizontalScale} from '../../constants/scalling';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {color} from '../../constants/color';
import AppPressable from '../../constants/AppPressable';

const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back!</Title>
      <Input placeholder="Enter Email" keyboardType={'email-address'} />
      <Input placeholder="Password" secureTextEntry />
      <Button title={'Login'} backgroundColor={color.purple} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Not registered?</Text>
        <AppPressable onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.footerLink}>Sign Up!</Text>
        </AppPressable>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(15),
  },
  footerContainer: {
    marginVertical: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: color.midGrey,
    fontSize: 16,
  },
  footerLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.purple,
  },
});
