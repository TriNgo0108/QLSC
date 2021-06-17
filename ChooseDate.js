import React, { useState } from 'react'
import { Pressable,Text } from 'react-native'
import CalenderIcon from './CalendarIcon';
import format from 'date-fns/format';
import styles from './styles';

const ChooseDate = ({fromDate, toDate, onPress}) =>{
    return(
        <Pressable style={styles.chooseDate} onPress={onPress}>
            <Text style={styles.text} >{format(fromDate,'dd/MM/yyyy')} - {format(toDate,'dd/MM/yyyy')}</Text>
            <CalenderIcon/>
        </Pressable>
    )
}

export default ChooseDate;