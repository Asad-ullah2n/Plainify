import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';
import BackArrow from '../components/BackArrow';
import Title from '../components/Title';
import {color} from '../constants/color';
import Input from '../components/Input';
import {category} from '../constants/category';
import AppPressable from '../constants/AppPressable';
import DateTimePicker from '../components/DateTimePicker';
import Button from '../components/Button';
import moment from 'moment';
import {db} from '../../firebase.config';

const AddTask = ({navigation}) => {
  const [selectedTask, setSelectedTask] = useState();
  const [selectedTaskValue, setSelectedTaskValue] = useState();
  const [deadline, setDeadline] = useState(new Date());
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const taskTypeHandler = (index, value) => {
    setSelectedTask(index);
    setSelectedTaskValue(value);
  };
  const renderItemsHandler = (item, index) => {
    return (
      <AppPressable
        onPress={() => taskTypeHandler(index, item.value)}
        style={[
          styles.taskTypecontainer,
          index === 0 ? styles.firstElement : {},
          index === selectedTask ? styles.activeTaskType : {},
        ]}>
        <Text style={styles.taskTypes}>{item.name}</Text>
      </AppPressable>
    );
  };
  const submitHandler = async () => {
    if (!title) {
      return alert('Please enter title for Task');
    }
    if (moment(deadline).isBefore(new Date())) {
      return alert('Please enter future date');
    }
    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(db, 'Tasks'), {
        title: title,
        deadline: deadline,
        taskType: selectedTaskValue,
      });
      console.log('Taks Red', docRef);
      navigation.navigate('Tasks');
    } catch (e) {
      console.error('Error adding document: ', e);
      Alert.alert('Error', e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackArrow name="chevron-left" size={33} color={color.black} />
      <Title type="thin">Add New Tasks</Title>
      <Text style={styles.title}>Describe the task</Text>
      <Input
        type="thin"
        placeholder="Type here..."
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.title}>Type</Text>
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => renderItemsHandler(item, index)}
      />
      <Text style={styles.title}>Deadline</Text>
      <DateTimePicker value={deadline} onChange={setDeadline} />
      {isLoading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Button
          onPress={submitHandler}
          title={'Add the Task'}
          style={{marginVertical: 24, marginHorizontal: 24}}
        />
      )}
    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: color.black,
    marginHorizontal: 24,
    fontWeight: '400',
    fontSize: 16,
  },
  taskTypecontainer: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: color.blue,
    borderRadius: 8,
    padding: 10,
    marginVertical: 16,
    backgroundColor: color.white,
  },
  taskTypes: {
    color: color.blue,
    fontWeight: '500',
    fontSize: 16,
  },
  firstElement: {
    marginLeft: 24,
  },
  activeTaskType: {
    backgroundColor: color.lighGrey,
  },
});
