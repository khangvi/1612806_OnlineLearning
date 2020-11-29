import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native'
import CourseScriptInfo from './course-script-info';

const CourseItem = (props) => {
    return <TouchableOpacity style={styles.item} onPress={()=> props.navigation.navigate('CourseDetail', {item:props.item})}>
        <Image style={styles.image} source={require('../../../../../assets/react_icon2.jpg')}/>
        <CourseScriptInfo item = {props.item}/>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    item:{
        margin: 5,
        marginBottom:20,
        width:200,
        height:200,
        backgroundColor: '#f5faf6'
    },
    image:{
        resizeMode:'stretch',
        height: 100,
        width: 200
    }
})

export default CourseItem;

