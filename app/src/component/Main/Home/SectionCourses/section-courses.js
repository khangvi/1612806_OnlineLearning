import React from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';

const SectionCourses = (props) => {
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

    const renderListItems = (data) =>{
        return data.map(item => <SectionCoursesItem item = {item}/>);
    }

    return <View>
        <View>
            <Text style = {styles.text}>{props.title}</Text>
        </View>
        <ScrollView horizontal = {true}>
            {renderListItems(data)} 
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({
   
    text:{
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default SectionCourses;