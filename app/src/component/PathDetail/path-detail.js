import React, { useContext } from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native'
import ViewMoreText from 'react-native-view-more-text';
import { CoursesContext } from '../../../App';
import ListCourses from '../Global/Components/ListCourses/list-courses';

export const PathDetail = (props) => {
  const coursesConText=useContext(CoursesContext);
  const allCourses=coursesConText.allCourses;
  let item = props.route.params.item
  props.navigation.setOptions({title: item.name})
  return(
    <ScrollView>
        <View style={styles.pathInfo}>
          <Image source={item.image} style={styles.imagePath}/>
          <View style={{margin:10}}>
            <Text style={{fontSize:17, fontWeight:'bold'}}>{item.name}</Text>
            <Text style={{fontSize:12}}>{item.coursesNum} courses</Text>
          </View>
        </View>
        <View style={{margin: 10, marginBottom:20}}>
          <ViewMoreText numberOfLines={3} textStyle={{fontSize: 12}}>
            <Text>demo text demo text demo text demo text demo text demo text demo text demo text 
                  demo text demo text demo text demo text demo text demo text demo text demo text 
                  demo text demo text demo text demo text demo text demo text demo text demo text 
                  demo text demo text demo text demo text demo text demo text demo text demo text 
            </Text>
          </ViewMoreText>
        </View>
        <ListCourses title="Beginner" courses={allCourses} navigation={props.navigation}/>
        <ListCourses title="Intermediate" courses={allCourses} navigation={props.navigation}/>
        <ListCourses title="Advanced" courses={allCourses} navigation={props.navigation}/>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    pathInfo:{
      flexDirection:'row'
    },
    imagePath:{
      height:80,
      width:80
    }
})

