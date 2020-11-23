import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import CourseScriptInfo from '../../../Courses/CourseScriptInfo/course-script-info'

const SectionCoursesItem = (props) => {
    return <View style={styles.items}>
        <Image source={require('../../../../../assets/react-icon.png')} style={styles.image}/>
        <CourseScriptInfo item = {props.item}/>
    </View>
};

const styles = StyleSheet.create({
    items:{
        margin: 5,
        height: 200,
        width: 200,
        backgroundColor: 'lightgray',
    },
    image:{
        width: 200,
        height: 100,
        resizeMode: 'stretch'
    },
    darkText:{
        color: 'darkgray'
    }
});

export default SectionCoursesItem;