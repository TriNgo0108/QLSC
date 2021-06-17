import React from 'react'
import styles from './styles'
import {Text, Pressable} from 'react-native'

const Button = ({title, onPress,textStyle,buttonStyle}) =>(
  
    <Pressable style={buttonStyle} onPress={onPress} >
      <Text style={textStyle}>{title}</Text>
  </Pressable>
)
 export default Button;