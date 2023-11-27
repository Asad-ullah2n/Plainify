import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import AppPressable from '../constants/AppPressable';
import moment from 'moment';
import {color} from '../constants/color';
import Icon from './Icon';

const DateTimePicker = ({value, onChange}) => {
  const [open, setOpen] = useState(false);
  const onDateOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <AppPressable style={[styles.thin]} onPress={onDateOpen}>
        <Icon name="calendar-clock" color={color.midGrey} size={24} />
        <Text style={styles.text}>{moment(value).format('L')}</Text>
      </AppPressable>
      <DatePicker
        theme="light"
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default React.memo(DateTimePicker);

const styles = StyleSheet.create({
  Input: {
    backgroundColor: color.lighGrey,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 15,
    borderRadius: 10,
    marginVertical: 12,
    color: color.black,
  },
  thin: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.lighGrey,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: color.white,
  },
  text: {
    fontSize: 15,
    color: color.midGrey,
    marginHorizontal: 12,
  },
});
