import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native'
import ViewMoreText from 'react-native-view-more-text';
import ListCourses from '../Global/Components/ListCourses/list-courses';

export const PathDetail = (props) => {
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
        <ListCourses title="Beginner" navigation={props.navigation}/>
        <ListCourses title="Intermediate" navigation={props.navigation}/>
        <ListCourses title="Advanced" navigation={props.navigation}/>
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

