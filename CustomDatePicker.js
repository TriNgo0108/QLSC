import { View, Text } from "react-native";
import DatePicker from "react-native-date-picker";
import styles from "./styles";
import React from "react";
const CustomDatePicker = ({ date, onDateChange, title }) => {
  return (
    <View style={styles.CustomDatePicker}>
      <Text style={styles.normal_text}>{title}</Text>
      <DatePicker date={date}  mode='date' locale='vi' onDateChange={onDateChange}/>
    </View>
  );
};
export default CustomDatePicker;
