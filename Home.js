import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import ListTab from "./ListTab";
import FollowTab from "./FollowTab";
import ChartTab from "./ChartTab";
import NotificationTab from "./NotificationTab";
import PersonTab from "./PersonTab";
import styles from "./styles";
const Tab = createBottomTabNavigator();
export default Home = () => {
  return (
    <Tab.Navigator
      initialRouteName={"ListTab"}
      tabBarOptions={{
        activeTintColor: "#ff9933",
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="ListTab"
        component={ListTab}
        options={{
          headerShown: false,
          tabBarLabel: "Danh sách",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FollowTab"
        component={FollowTab}
        options={{
          headerShown: false,
          tabBarLabel: "Theo dõi và giám sát",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="television" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ChartTab"
        component={ChartTab}
        options={{
          headerShown: false,
          tabBarLabel: "Biểu đồ",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="dotchart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationTab"
        component={NotificationTab}
        options={{
          headerShown: false,
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PersonTab"
        component={PersonTab}
        options={{
          headerShown: false,
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
