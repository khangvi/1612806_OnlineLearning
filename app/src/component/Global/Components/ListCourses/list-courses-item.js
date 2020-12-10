import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import CourseScriptInfo from '../CourseItem/course-script-info';

const ListCoursesItem = (props) => {
    return <TouchableOpacity style={styles.touch} onPress={()=> props.navigation.navigate("CourseDetail", {item:props.item})}>
        <Image source={props.item.image} style={styles.image}/>
        <CourseScriptInfo item={props.item}/>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    touch:{
        flexDirection: 'row',
        margin:10,
        backgroundColor:'#f5faf6'
    },
    image:{
        width:60,
        height:60,
        resizeMode:'stretch'
    }
})

export default ListCoursesItem;

