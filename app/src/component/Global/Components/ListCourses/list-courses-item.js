import React from 'react';
import { StyleSheet, TouchableOpacity, Image} from 'react-native'
import CourseScriptInfo from '../CourseItem/course-script-info';

const ListCoursesItem = (props) => {
    return <TouchableOpacity style={styles.touch} onPress={()=> props.navigation.navigate("CourseDetail", {item:props.item})}>
        {
            (props.item.imageUrl) ?
            <Image style={styles.image} source={{uri: props.item.imageUrl}}/> :
            <Image style={styles.image} source={{uri: props.item.courseImage}}/>
        }
        <CourseScriptInfo item = {props.item}/>
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
    },
    darkText:{
        color: 'darkgray',
        fontSize:12
    },
    textTitle:{
        fontWeight: 'bold',
    }
})

export default ListCoursesItem;

