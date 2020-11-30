import React from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import CourseItem from '../CourseItem/course-item';

const SectionCourses = (props) => {
    
    const data=[
        {
            id: 1,
            image:{uri: 'https://cdn-media-1.freecodecamp.org/images/1*2TWW_kmC28W_rfXJqT6oPg.jpeg'},
            title: 'Angular Fundamentals',
            author: 'Joe Eames',
            level: 'Intermediate',
            released: 'Feb 2019',
            duration: '9h 35m',
            star: 4.5,
            vote: 927,
            bookmarked: true,
            downloaded: true,
        },
        {
            id: 2,
            image: {uri:'https://toidicodedao.files.wordpress.com/2018/03/cover.jpg'},
            title: 'C# Fundamentals',
            author: 'Scott Allen',
            level: 'Beginner',
            released: 'Apr 2019',
            duration: '6h 5m',
            star: 4.5,
            vote: 727,
            bookmarked: false,
            downloaded: true,
        },
        {
            id: 3,
            image:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPPy4ujZo9MArdBXPR7RXbQ-2gg0zbRgsRQ&usqp=CAU'},
            title: 'Managing AWS Operation',
            author: 'Andru Estes',
            level: 'Intermediate',
            released: 'May 2019',
            duration: '3h 3m',
            star: 4,
            vote: 20,
            bookmarked: true,
            downloaded: false,
        },
        {
            id: 4,
            image:{uri: 'https://timviec365.com/pictures/images/coder-la-gi-6(1).jpg'},
            title: 'Spring: The Big Picture',
            author: 'Dustin Schultz',
            level: 'Beginner',
            released: 'May 2018',
            duration: '1h 15m',
            star: 5,
            vote: 472,
            bookmarked: false,
            downloaded: false,
        }];

    const renderListItems = (data) =>{
        return data.map(item => <CourseItem item = {item} navigation={props.navigation}/>);
    }

    return <View>
        <View>
            <Text style = {styles.text}>{props.title}</Text>
        </View>
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
            {renderListItems(data)} 
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({
   
    text:{
        margin: 5,
        fontSize: 17,   
        fontWeight: 'bold',
    }
});

export default SectionCourses;