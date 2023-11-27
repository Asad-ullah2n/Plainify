import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import Header from '../components/Header';
import StickyButton from '../components/StickyButton';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Title type="thin">To do Tasks</Title>
      </ScrollView>
      <StickyButton />
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
