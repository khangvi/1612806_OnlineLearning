import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

const CourseScriptInfo = (props) => {
    return <View style={{marginLeft: 5}} >
        <Text style={styles.textTitle}>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text style={styles.darkText}>{props.item.level} . {props.item.released} . {props.item.duration}</Text>
    </View>
};

const styles = StyleSheet.create({
    darkText:{
        color: 'darkgray',
    },
    textTitle:{
        fontWeight: 'bold',
    }
})

export default CourseScriptInfo;

