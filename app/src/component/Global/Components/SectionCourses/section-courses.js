import React from 'react'
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'
import CourseItem from '../CourseItem/course-item';

const SectionCourses = (props) => {
  let data = props.courses

  return <SafeAreaView>
      <View style={styles.headerContainer}>
          <Text style = {styles.text}>{props.title}</Text>
          <TouchableOpacity onPress={() => props.navigation.push("CourseList", {courses:props.courses, title:props.title, navigation:props.navigation})}>
            <Text style={{marginTop: 10, marginRight: 5, fontSize: 12}}> See all{` >`}</Text>
          </TouchableOpacity>
      </View>
      {/* <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
          {props.courses.map(item => <CourseItem item = {item} navigation={props.navigation}/>)} 
      </ScrollView> */}
        <FlatList
          data={data}
          renderItem={({item}) => <CourseItem item = {item} navigation={props.navigation}/>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
  </SafeAreaView>
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