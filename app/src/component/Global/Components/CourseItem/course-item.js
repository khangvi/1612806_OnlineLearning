import React from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native'
import CourseScriptInfo from './course-script-info';

const CourseItem = (props) => {
    return <TouchableOpacity style={styles.item} onPress={()=> props.navigation.navigate('CourseDetail', {item:props.item})}>
        {
            (props.item.imageUrl) ?
            <Image style={styles.image} source={{uri: props.item.imageUrl}}/> :
            <Image style={styles.image} source={{uri: props.item.courseImage}}/>
        }
        <CourseScriptInfo item = {props.item}/>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    item:{
        margin: 5,
        marginBottom:20,
        width:200,
        height:200,
        backgroundColor: '#f5faf6',
        shadowRadius: 10
    },
    image:{
        resizeMode:'stretch',
        height: 100,
        width: 200
    }
})

export default CourseItem;

