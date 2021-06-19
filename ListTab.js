import React from "react";
import styles from "./styles";
import { SafeAreaView, View, FlatList } from "react-native";
import ChooseDate from "./ChooseDate";
import CalendarModal from "./CalenderModal";
import { useState, useEffect } from "react/cjs/react.development";
import FilterIcon from "./FilterIcon";
import { FloatingAction } from "react-native-floating-action";
import AsyncStorageStatic from "@react-native-async-storage/async-storage";
import axios from "axios";
import Item from "./Item";

export default function ListTab() {
  let date = new Date();
  let currentDate = date;
  let previousMonth = date;
  previousMonth.setMonth(date.getMonth() - 1);
  const [ModalVisible, setVisible] = useState(false);
  const [fromDate, setFromDate] = useState(currentDate);
  const [toDate, setToDate] = useState(previousMonth);
  const [reports, setReports] = useState([]);
  const [page,setPage] = useState(1);
  const [incidentObjects,setIncidentObjet] = useState([]);
  const [reportStatusList,setReportStatus] = useState([]);
  const [reportTypeList,setReportType] = useState([]);
  useEffect(() => {
    async function getData() {
      let accessToken = await AsyncStorageStatic.getItem("@accessToken");
      let tokenType = await AsyncStorageStatic.getItem("@tokenType");
      let incidentObject = [];
      let reportList = [];
      let reportStatus = [];
      let reportType = [];
      let auth = `${tokenType} ${accessToken}`;
      let response_reports = await axios.post(
        "https://qlsc.maysoft.io/server/api/getAllReports",
        { page: page },
        { headers: { Authorization: auth } }
      );
      if (response_reports.status === 200) {
        reportList = response_reports.data.data.data;
        setReports(response_reports.data.data.data);
      }
      let response = await axios.post(
        "https://qlsc.maysoft.io/server/api/getCommon",
        { groups: "incidentObject, reportStatus, reportType" },
        { headers: { Authorization: auth } }
      );
      if (response.status === 200) {
        incidentObject = response.data.data.incidentObject;
        reportStatus = response.data.data.reportStatus;
        reportType = response.data.data.reportType;
        setIncidentObjet(response.data.data.incidentObject);
        setReportStatus(response.data.data.reportStatus);
        setReportType(response.data.data.reportType);
      }
      reportList.forEach((report) => {
        let status = reportStatus.filter(
          (statusCode) => statusCode.code == report.status
        );
        report.status = status[0].name;
        let incidentName = incidentObject.filter(
          (incident) => incident.code == report.incidentObject
        );
        report.incidentObject = incidentName[0].name;
        let reportName = reportType.filter(
          (name) => name.code == report.reportType
        );
        report.reportType = reportName[0].name;
      });

      // let response_department = await axios.post(
      //   "https://qlsc.maysoft.io/server/api/getAllDepartments",
      //   {},
      //   { headers: { Authorization: auth } }
      // );

      // if (response_department.status === 200) {
      //   departments = response_department.data.data.data;
      // }
    }
    getData();
    // with [] parameter, just run the callback when the component mount for the first time.
    // In addition, using [] we'll tell useEffect that there are no properties we want to watch ann run the callback
    // Large different too between [] parameter and no parameter. With No Parameter, it should run when the component mounts and then on every single update
  }, []);
  const paging = async()=>{
    let accessToken = await AsyncStorageStatic.getItem("@accessToken");
    let tokenType = await AsyncStorageStatic.getItem("@tokenType");
    let auth = `${tokenType} ${accessToken}`;
      let response = await axios.post(
        "https://qlsc.maysoft.io/server/api/getAllReports",
        { page: page },
        { headers: { Authorization: auth } }
      );
      let reportList = response.data.data.data;
      let incidentObject = incidentObjects;
      let reportStatus = reportStatusList;
      let reportType = reportTypeList;
      reportList.forEach((report)=>{
        let status = reportStatus.filter(
          (statusCode) => statusCode.code == report.status
        );
        report.status = status[0].name;
        let incidentName = incidentObject.filter(
          (incident) => incident.code == report.incidentObject
        );
        report.incidentObject = incidentName[0].name;
        let reportName = reportType.filter(
          (name) => name.code == report.reportType
        );
        report.reportType = reportName[0].name;
      });
      let newReportList = [...reports];
      newReportList.concat(reportList)
  }
 
  return (
    <SafeAreaView style={[styles.main, styles.column]}>
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
      <View style={styles.FloatingAction}>
        <FloatingAction color="#ff9933" position={"right"} />
      </View>
      <View style={styles.shadow}>
        <View style={styles.flatList}>
          <FlatList
            data={reports}
            renderItem={Item}
            keyExtractor={(report) => report.id}
            onEndReachedThreshold={0}
            onEndReached ={(number)=>{
              console.log("\n");
              setPage(page+1);
              paging();
            }}
          />
        </View>
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
    </SafeAreaView>
  );
}

