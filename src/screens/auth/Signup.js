import {
  Alert,
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
import Checkbox from '../../components/Checkbox';
import {PRIVACY_CONDITIONS} from '../../components/links';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../firebase.config';

const Signup = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: '',
  });
  console.log(values.email);
  const handleCheckbox = () => {
    setIsChecked(val => !val);
  };

  const openLinks = link => {
    Linking.openURL(link);
  };
  const inputHandler = (val, key) => {
    setValues(pre => ({...pre, [key]: val}));
  };

  const signupHandler = async () => {
    if (Object.values(values).some(value => !value)) {
      return Alert.alert('All fields required');
    }

    if (values.password !== values.confirmPass) {
      return Alert.alert('Error', 'Passwords do not match');
    }

    if (!isChecked) {
      return Alert.alert('Please agree to terms and conditions');
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log('User created successfully:', response);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error('Error creating user:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Join the hub!</Title>
        <Input
          placeholder="First Name"
          values={values.name}
          onChangeText={text => inputHandler(text, 'name')}
        />
        <Input
          placeholder="Last Name"
          values={values.lastName}
          onChangeText={text => inputHandler(text, 'lastName')}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          values={values.email}
          onChangeText={text => inputHandler(text, 'email')}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          values={values.password}
          onChangeText={text => inputHandler(text, 'password')}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry
          values={values.confirmPass}
          onChangeText={text => inputHandler(text, 'confirmPass')}
        />

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
        <Button
          title={'Create account'}
          backgroundColor={color.blue}
          onPress={signupHandler}
        />
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
