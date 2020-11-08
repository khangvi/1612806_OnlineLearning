import React from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native'
import SectionCourses from './SectionCourses/section-courses'

const Home = (props) => {
    return <View style={styles.home}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Home</Text>
        </View>
        <ScrollView>
            <SectionCourses title = 'Continue learning'/>
            <SectionCourses title = 'Paths'/>
            <SectionCourses title = 'Channels'/>
            <SectionCourses title = 'Bookmarks'/>
        </ScrollView>
    </View>
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