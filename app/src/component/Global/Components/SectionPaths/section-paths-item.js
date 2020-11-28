import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'

const SectionPathsItem = (props) => {
    return <TouchableOpacity style={styles.container}>
        <Image source={props.item.image} style={styles.thumnail}/>
        <Text style={styles.textTitle}>{props.item.name}</Text>
        <Text style={styles.textScript}>{props.item.coursesNum} courses</Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    container:{
        height: 200,
        width: 200,
        margin: 5,
        backgroundColor: '#f5faf6',
    },
    thumnail:{
        height: 100,
        marginBottom: 5
    },
    textScript:{
        marginLeft: 5,
        fontSize: 12,
        color: 'gray'
    },
    textTitle:{
        marginLeft: 5,
    }
})

export default SectionPathsItem;

