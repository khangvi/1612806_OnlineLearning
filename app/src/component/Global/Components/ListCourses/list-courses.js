import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native'
import ListCoursesItem from './list-courses-item';
import { Divider } from 'react-native-elements';


const ListCourses = (props) => {
  const data=[
    {
      id: 1,
      image:{uri: 'https://cdn-media-1.freecodecamp.org/images/1*2TWW_kmC28W_rfXJqT6oPg.jpeg'},
      title: 'Angular Fundamentals',
      author: 'Joe Eames',
      level: 'Intermediate',
      released: 'Feb 2019',
      duration: '9h 35m',
      star: 4.5,
      vote: 927,
      bookmarked: true,
      downloaded: true,
    },
    {
      id: 2,
      image: {uri:'https://toidicodedao.files.wordpress.com/2018/03/cover.jpg'},
      title: 'C# Fundamentals',
      author: 'Scott Allen',
      level: 'Beginner',
      released: 'Apr 2019',
      duration: '6h 5m',
      star: 4.5,
      vote: 727,
      bookmarked: false,
      downloaded: true,
    },
    {
      id: 3,
      image:{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPPy4ujZo9MArdBXPR7RXbQ-2gg0zbRgsRQ&usqp=CAU'},
      title: 'Managing AWS Operation',
      author: 'Andru Estes',
      level: 'Intermediate',
      released: 'May 2019',
      duration: '3h 3m',
      star: 4,
      vote: 20,
      bookmarked: true,
      downloaded: false,
    },
    {
      id: 4,
      image:{uri: 'https://timviec365.com/pictures/images/coder-la-gi-6(1).jpg'},
      title: 'Spring: The Big Picture',
      author: 'Dustin Schultz',
      level: 'Beginner',
      released: 'May 2018',
      duration: '1h 15m',
      star: 5,
      vote: 472,
      bookmarked: false,
      downloaded: false,
    }];
    if(props.route){
      props.navigation.setOptions({ title: props.route.params.header })
    }

  return (
  <View>
    <Text style={styles.textTitle}>{props.title}</Text> 
    <FlatList
      data={data}
      renderItem={({item}) => <ListCoursesItem item = {item} navigation={props.navigation}/>}
      keyExtractor={item => item.ID}
      ItemSeparatorComponent={({item}) => <Divider style={{width:'95%', backgroundColor:'black', marginLeft:10}}/>}
    />  
  </View>
  )
};

const styles = StyleSheet.create({
    textTitle:{
        margin: 10,
    }
})

export default ListCourses;

