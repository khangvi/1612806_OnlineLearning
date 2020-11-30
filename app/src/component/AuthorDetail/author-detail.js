import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import {Avatar,ViewMoreText} from 'react-native-elements';
import TextButton from '../Common/text-button';
import ListCourses from '../Global/Components/ListCourses/list-courses';

export const AuthorDetail = (props) => {
  const item=props.route.params.item
  return (
  <ScrollView>
    <View style={styles.avatarContanier}>
      <Avatar 
        size="medium"
        rounded
        source={item.image}
      />
      <Text style={{fontWeight:'bold', margin: 5}}>{item.name}</Text>
      <Text style={{fontSize: 12}}>Kavila Author</Text>
    </View>
    <TextButton title="FOLLOWING"/>
    <View style={{margin:10}}>
      <ViewMoreText numberOfLines={3} textStyle={{fontSize: 12}}>
        <Text>demo text demo text demo text demo text demo text demo text demo text demo text 
              demo text demo text demo text demo text demo text demo text demo text demo text 
              demo text demo text demo text demo text demo text demo text demo text demo text 
              demo text demo text demo text demo text demo text demo text demo text demo text 
        </Text>
      </ViewMoreText>
    </View>
    <ListCourses title="Course" navigation={props.navigation}/>
  </ScrollView>
  )
};

const styles = StyleSheet.create({
    avatarContanier:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    }
})

