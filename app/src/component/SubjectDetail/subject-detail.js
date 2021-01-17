import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native'
import { CoursesContext } from '../../../App';
import { getCategoryCourses } from '../../core/services/category-service';
import SectionCourses from '../Global/Components/SectionCourses/section-courses';

export const SubjectDetail = (props) => {
  const coursesContext=useContext(CoursesContext);
  let title=props.route.params.title
  let id=props.route.params.id
  props.navigation.setOptions({title: title})
  const [courses, getCourses] = useState([]);

  useEffect(() =>{
    getCategoryCourses(id).then(getCourses);
  }, [])

  return (
  <View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginVertical:10}}>
        <SectionCourses title={`Courses in ${title}`} courses={courses} navigation={props.navigation}/>
      </View>
    </ScrollView>
  </View>
  )
};