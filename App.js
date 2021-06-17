import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./Home";
import Login from "./Login";
const Root = createStackNavigator();
export default App = () => (
  <NavigationContainer>
    <Root.Navigator initialRouteName="Login">
      <Root.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Root.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Root.Navigator>
  </NavigationContainer>
);
