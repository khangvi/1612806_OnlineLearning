import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

const CourseScriptInfo = (props) => {
    return <View style={{margin: 5}} >
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text style={styles.darkText}>{props.item.level} . {props.item.released} . {props.item.duration}</Text>
    </View>
};

const styles = StyleSheet.create({
    darkText:{
        color: 'darkgray'
    }
})

export default CourseScriptInfo;

