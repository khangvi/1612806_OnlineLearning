import React, { useContext } from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import { CoursesContext } from '../../../../App';
import SectionCourses from '../../Global/Components/SectionCourses/section-courses';

const Home = (props) => {
    const coursesContext = useContext(CoursesContext);
    const courseList = coursesContext.allCourses;
    const bookmarkedCourses=coursesContext.bookmarkedCourses;
    return (
    <ScrollView>
      <SectionCourses title = 'Software Development' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'IT Operations' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'Data Professional' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'Security Professional' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'Bookmarks' courses={bookmarkedCourses} navigation={props.navigation}/>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    home:{
        marginTop: 24,
    },
    header:{
        height:50,
    },
    textHeader:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
    }
});

export default Home;