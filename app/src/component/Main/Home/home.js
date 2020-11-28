import React from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native'
import SectionCourses from '../../Global/Components/SectionCourses/section-courses';

const Home = (props) => {
    return (
        <ScrollView>
            <SectionCourses title = 'Software Development'/>
            <SectionCourses title = 'IT Operations'/>
            <SectionCourses title = 'Data Professional'/>
            <SectionCourses title = 'Security Professional'/>
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