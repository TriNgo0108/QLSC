import React from "react";
import styles from "./styles";
import Input from "./Input";
import Button from "./Button";
import { SafeAreaView, Image } from "react-native";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import AsyncStorageStatic  from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const storeData = async(key,value)=>{
    try {
      await AsyncStorageStatic.setItem(key,value);
    } catch (error) {
      
    }
}
export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/qlsc.png")} style={styles.logo} />
      <Input
        title="Tên đăng nhập:"
        placeholder="Nhập tên đăng nhập"
        style={styles.input}
        isSecureText={false}
        onChangeText={(username) => {
          setUsername(username);
        }}
      />
      <Input
        title="Mật khẩu:"
        placeholder="Nhập mật khẩu"
        style={styles.input}
        isSecureText={true}
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      <Button
        title="Đăng nhập"
        buttonStyle={styles.button}
        textStyle={styles.button_text}
        onPress={async function getUser() {
          try {
            if (username == "" || password =="") {
              Alert.alert("Lỗi","Tài khoản hoặc mật khẩu không được bỏ trống");
              return;
            }
            let response = await axios.post(
              "https://qlsc.maysoft.io/server/api/auth/login",
              { username: username, password: password }
            );
            if (response.status == 200) {
              let data = response.data.data;
              if (data == undefined) {
                console.log("user not exists");
                Alert.alert("Lỗi","Tài khoản hoặc mật khẩu không đúng");
              } else {
                  storeData("@accessToken",data.access_token);
                  storeData("@expiresAt",data.expires_at);
                  storeData("@tokenType",data.token_type);
                navigation.navigate("Home");
              }
            }
          } catch (error) {
            console.error(error);
            Alert.alert("Lỗi","Có lỗi xảy ra vui lòng thử lại");
          }
        }}
      />
    </SafeAreaView>
  );
}
