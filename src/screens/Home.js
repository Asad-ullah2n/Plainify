import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import StickyButton from '../components/StickyButton';
import Title from '../components/Title';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header />
        <Title type="thin">Daily Tasks:</Title>
      </ScrollView>
      <StickyButton />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
