import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'

export const IconButton  = ({icon, text, onPressButton}) => {

    return (
    <TouchableOpacity style={styles.touch} onPress={onPressButton}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.txt}>{text}</Text>
    </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
  touch: {
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60
  },
  txt: {
    marginTop: 5,
    color: '#000000',
    fontSize: 15
  }
})

