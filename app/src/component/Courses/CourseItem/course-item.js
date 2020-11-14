import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import CourseScriptInfo from '../CourseScriptInfo/course-script-info';

const CourseItem = (props) => {
    return <View style={styles.item} >
        <Image style={styles.image} source={require('../../../../assets/react_icon2.jpg')}/>
        <CourseScriptInfo item = {props.item}/>
    </View>
};

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        margin: 5
    },
    image:{
        margin: 5,
        resizeMode:'stretch',
        height: 100,
        width: 100
    }
})

export default CourseItem;

