import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const TextButton = (props) => {
    return <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>{props.item.title}</Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    touch:{
        marginTop: 10,
        backgroundColor:'#f5faf6',
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

