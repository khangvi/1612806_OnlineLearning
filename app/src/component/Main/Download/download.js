import React, { useContext } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { CoursesContext } from '../../../../App';
import ListCourses from '../../Global/Components/ListCourses/list-courses';

export const Download = (props) => {
  const coursesContext=useContext(CoursesContext);
  const downloadedCourses=coursesContext.downloadedCourses;
  return( 
    <ScrollView>
      <View style={{margin: 10}}>
        <Text>{downloadedCourses.length} courses</Text>
      </View>
      <ListCourses courses={downloadedCourses} navigation={props.navigation}/>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    
})

