import React from 'react'
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'
import CourseItem from '../CourseItem/course-item';

const SectionCourses = (props) => {
  return <View>
      <View style={styles.headerContainer}>
          <Text style = {styles.text}>{props.title}</Text>
          <TouchableOpacity onPress={() => props.navigation.push("CourseList", {courses:props.courses, title:props.title})}>
            <Text style={{marginTop: 10, marginRight: 5, fontSize: 12}}> See all{` >`}</Text>
          </TouchableOpacity>
      </View>
      <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
          {props.courses.map(item => <CourseItem item = {item} navigation={props.navigation}/>)} 
      </ScrollView>
  </View>
};

const styles = StyleSheet.create({
  text:{
  margin: 5,
  fontSize: 17,   
  fontWeight: 'bold',
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default SectionCourses;