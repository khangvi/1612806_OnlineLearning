import React from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native'
import SectionCourses from '../../Global/Components/SectionCourses/section-courses';

const Home = (props) => {
    return (
        <ScrollView>
            <SectionCourses title = 'Software Development' navigation={props.navigation}/>
            <SectionCourses title = 'IT Operations' navigation={props.navigation}/>
            <SectionCourses title = 'Data Professional' navigation={props.navigation}/>
            <SectionCourses title = 'Security Professional' navigation={props.navigation}/>
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