import {
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useAnimatedValue,
} from 'react-native';
import React, {useState} from 'react';
import Title from '../../components/Title';
import {horizontalScale} from '../../constants/scalling';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {color} from '../../constants/color';
import AppPressable from '../../constants/AppPressable';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../firebase.config';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const inputHandler = (val, key) => {
    setValues(pre => ({...pre, [key]: val}));
  };
  const signInHandler = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log('val', values);
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back!</Title>
      <Input
        placeholder="Enter Email"
        keyboardType={'email-address'}
        values={values.email}
        onChangeText={text => inputHandler(text, 'email')}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        values={values.password}
        onChangeText={text => inputHandler(text, 'password')}
      />
      <Button
        title={'Login'}
        backgroundColor={color.purple}
        onPress={signInHandler}
      />
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
