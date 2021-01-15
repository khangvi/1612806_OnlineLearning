import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native'
import ListCoursesItem from './list-courses-item';
import { Divider } from 'react-native-elements';


const ListCourses = (props) => {
  let navigation
  let data
  let name
  if(props.route){
    data=props.route.params
    props.navigation.setOptions({ title: data.title })
    name = ''
  }
  else{
    data=props
    name = data.title
  }

  return (
  <View>
    <Text style={styles.textTitle}>{name}</Text> 
    <FlatList
      data={data.courses}
      renderItem={({item}) => <ListCoursesItem item = {item} navigation={data.navigation}/>}
      keyExtractor={item => item.ID}
      ItemSeparatorComponent={({item}) => <Divider style={{width:'95%', backgroundColor:'black', marginLeft:10}}/>}
    />  
  </View>
  )
};

const styles = StyleSheet.create({
    textTitle:{
        marginLeft: 10,
    }
})

export default ListCourses;

