import React, { useState } from "react";
import styles from "./styles";
import { Text, Modal, View } from "react-native";
import CustomDatePicker from "./CustomDatePicker";
import Button from "./Button";

const CalendarModal = ({
  visible,
  fromData,
  toDate,
  onFromDateChange,
  onToDateChange,
  onSearch,
  onCancel,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.titile}>Tìm kiếm </Text>
          <CustomDatePicker
            date={fromData}
            title={"Từ ngày"}
            onDateChange={onFromDateChange}
          />
          <CustomDatePicker
            date={toDate}
            title={"Đến ngày"}
            onDateChange={onToDateChange}
          />
          <View style={[styles.row,{marginBottom:10}]}>
            <Button
              title={"Tìm kiếm"}
              onPress={onSearch}
              textStyle={styles.button_text}
              buttonStyle={[styles.button, styles.search_button]}
            />
            <Button
              title={"Hủy"}
              onPress={onCancel}
              textStyle={[styles.button_text, styles.cancel_button_text]}
              buttonStyle={[styles.button, styles.cancel_button]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;
