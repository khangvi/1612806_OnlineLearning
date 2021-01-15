import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const TextButton = ({title, navigation}) => {
    return <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('SubjectDetail', {title:title})}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    touch:{
        marginTop: 10,
        backgroundColor:'#f5faf6',
        margin: 5,
        height: 30,
        borderWidth: 1,
        borderColor: '#3faee0',
        borderRadius: 60,
        justifyContent:'center',
        alignContent:'center',
        padding: 15,
    },
    text:{
        fontSize: 12,
        textAlign:'center'
    }
})

export default TextButton;

