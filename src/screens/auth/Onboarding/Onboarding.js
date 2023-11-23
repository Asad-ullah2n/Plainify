import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../../constants/scalling';
import Button from '../../../components/Button';
import {color} from '../../../constants/color';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={require('../../../assets/asad.jpeg')}
        />
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: color.purple,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          bottom: 0,
          position: 'absolute',
        }}
      />
      <View style={styles.buttonsView}>
        <Text style={styles.title}>Best Task Managment App</Text>
        <Text style={styles.subtitle}>
          Get organized sort of all your tasks and boost your productivity
        </Text>
        <Button
          title={'Log in'}
          backgroundColor={color.purple}
          onPress={() => navigation.navigate('Sign In')}
        />
        <Button title={'Get Started'} backgroundColor={color.blue} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: '100%',
    flex: 1,
  },
  buttonsView: {
    padding: horizontalScale(30),
    backgroundColor: color.white,

    paddingTop: verticalScale(20),
  },
  title: {
    alignSelf: 'center',
    fontWeight: '600',
    color: color.black,
    fontSize: 20,
    paddingVertical: verticalScale(10),
  },
  subtitle: {
    textAlign: 'center',
    color: color.black,
  },
});
