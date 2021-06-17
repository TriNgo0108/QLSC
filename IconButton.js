import React from 'react'
import styles from './styles'
import {Image, Pressable} from 'react-native'

const IconButton = ({ImageURL, onPress}) =>(
  
    <Pressable style={styles.button} onPress={onPress} >
      <Image source={require(ImageURL)} style={styles.iconButton}></Image>
  </Pressable>
)
 export default IconButton;