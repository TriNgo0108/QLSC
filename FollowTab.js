import React from "react";
import styles from "./styles";
import { SafeAreaView, Image, Text, View } from "react-native";
import ChooseDate from "./ChooseDate";
import CalendarModal from "./CalenderModal";
import { useState } from "react/cjs/react.development";
import FilterIcon from "./FilterIcon";
import { FloatingAction } from "react-native-floating-action";

const FollowTab = ()=> {
  let date = new Date();
  let currentDate = date;
  let previousMonth = date;
  previousMonth.setMonth(date.getMonth() - 1);
  const [ModalVisible, setVisible] = useState(false);
  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, setToDate] = useState(previousMonth);
  return (
    <SafeAreaView style={styles.main}>
      <View style={[styles.header, styles.row]}>
        <ChooseDate
          fromDate={fromDate}
          toDate={toDate}
          onPress={() => {
            setVisible(true);
          }}
        />
        <FilterIcon />
      </View>
      <CalendarModal
        visible={ModalVisible}
        fromData={fromDate}
        toDate={toDate}
        onFromDateChange={(date) => {
          setFromDate(date);
        }}
        onToDateChange={(date) => {
          setToDate(date);
        }}
        onSearch={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
        <View style={styles.FloatingAction}>
          <FloatingAction color='#ff9933' position={'right'}/>
        </View>
    </SafeAreaView>
  );
}

export default FollowTab;