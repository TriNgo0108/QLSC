import React, { useState } from 'react'
import styles from './styles'
import { View, TextInput, Text } from 'react-native'


const Input = ({ title, placeholder, style, isSecureText, onChangeText }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={style}>
        <TextInput placeholder={placeholder} secureTextEntry={isSecureText}
          onChangeText={onChangeText}
          />
      </View>
    </View>
  )
}

export default Input;