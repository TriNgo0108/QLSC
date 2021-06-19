import React from "react";
import { Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { fromUnixTime, format } from "date-fns";
import styles from "./styles";

const Item = ({ item}) => {
  let date = fromUnixTime(item.reportTime);
  return (
    <View style={[styles.column, styles.item]}>
      <View style={styles.row_item}>
        <Text style={[styles.item_text, styles.bold]}>{item.reportNo}</Text>
        <Text style={[styles.item_text, styles.incidentObject]}>
          {item.status}
        </Text>
      </View>
      <Text style={[styles.item_text, styles.time]}>
        {format(date, "dd/MM/yyyy HH:mm")}
      </Text>
      <View style={[styles.row_item,styles.spaceBetwween]}>
        <View style={styles.column}>
          <View style={styles.row_item}>
            <Text style={styles.item_text}>{item.reportType}</Text>
            <Text style={[styles.item_text, styles.verticalBar]}>|</Text>
            <Text style={[styles.item_text, styles.noMarignLeft]}>
              {item.incidentObject}
            </Text>
          </View>
          <Text style={styles.item_text}>{item.detector}</Text>
        </View>
        <View style={styles.verticalOption}>
          <SimpleLineIcons name="options-vertical" size={24} color="#ff9933" />
        </View>
      </View>

      <Text style={styles.item_text}>{item.detailDescription}</Text>
    </View>
  );
};
export default Item;
