import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { Avatar } from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';
import { CoursesContext } from '../../../App';
import { getAuthorDetail } from '../../core/services/author';
import TextButton from '../Common/text-button';
import ListCourses from '../Global/Components/ListCourses/list-courses';

export const AuthorDetail = (props) => {
  const coursesContext=useContext(CoursesContext);
  const allCourses=coursesContext.allCourses;
  const item=props.route.params.item
  const [authorDetail, setAuthorDetail] = useState(null);

  useEffect(() => {
    getAuthorDetail(item.id).then((res) => setAuthorDetail(res.courses));
  }, [])

  return (
  <ScrollView>
    <View style={styles.avatarContanier}>
      <Avatar 
        size="large"
        rounded
        source={{uri: item["user.avatar"]}}
      />
      <Text style={{fontWeight:'bold', margin: 5}}>{item["user.name"]}</Text>
      <Text style={{fontSize: 12}}>{item.intro}</Text>
    </View>
    <TextButton title="FOLLOWING"/>
    <View style={{margin:10}}>
      <ViewMoreText numberOfLines={3} textStyle={{fontSize: 12}}>
        <Text style={{fontWeight:'bold'}}>Skill: {'\n'}</Text>
        {item.skills.map((skill) => <Text>{skill}{'\n'}</Text>)}
      </ViewMoreText>
    </View>
    <ListCourses title="Courses" courses={authorDetail} navigation={props.navigation}/>
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

