import React from 'react'
import { createContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'
import { LanguageContext } from '../../../../../App';
import CourseItem from '../CourseItem/course-item';

const SectionCourses = (props) => {
  const languageContext = createContext(LanguageContext);
  const language = languageContext.language;
  let data = props.courses

  return <SafeAreaView>
      <View style={styles.headerContainer}>
          <Text style = {styles.text}>{props.title}</Text>
          <TouchableOpacity onPress={() => props.navigation.push("CourseList", {courses:props.courses, title:props.title, navigation:props.navigation})}>
            {(language === 'eng') ? <Text style={{marginTop: 10, marginRight: 5, fontSize: 12}}> See all{` >`}</Text> : <Text style={{marginTop: 10, marginRight: 5, fontSize: 12}}> Xem thêm{` >`}</Text>}
          </TouchableOpacity>
      </View>
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