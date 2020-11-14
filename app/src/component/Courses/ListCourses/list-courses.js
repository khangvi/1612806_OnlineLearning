import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native'
import Separator from '../../Common/separator';
import CourseItem from '../CourseItem/course-item';

const ListCourses = (props) => {
    const data = [
        {
            id: 1,
            title: 'React',
            author: 'Hai Pham',
            level: 'Intermediate',
            released: 'Nov 2020',
            duration: '40 hours'
        },
        {
            id: 2,
            title: 'Android',
            author: 'Tuan Nguyen',
            level: 'Beginner',
            released: 'Nov 2020',   
            duration: '35 hours'
        },
        {
            id: 3,
            title: 'IOS',
            author: 'Tri Nguyen',
            level: 'Master',
            released: 'Nov 2020',
            duration: '11 hours'
        }
    ]

   

    return <View style={styles.container}>
        <Text style={styles.text}>Courses</Text>
        <FlatList
        data = {data}
        renderItem = {({item}) => <CourseItem item={item}/>}
        //ItemSeparatorComponent = {<Separator/>}
        />
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginTop: 24,
    },
    text:{
        margin: 5,
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default ListCourses;

