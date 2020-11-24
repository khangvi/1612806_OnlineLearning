import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

const TextButton = (props) => {
    return <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>{props.item.title}</Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    touch:{
        marginTop: 20,
        backgroundColor:'lightgray',
        margin: 5,
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 60,
        justifyContent:'center',
        alignContent:'center',
        padding: 15,
    },
    text:{
        fontSize: 12,
    }
})

export default TextButton;

