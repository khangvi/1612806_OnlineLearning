import React from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { Avatar } from 'react-native-elements';
import ViewMoreText from 'react-native-view-more-text';
import { LanguageContext } from '../../../App';
import { getAuthorDetail } from '../../core/services/author';
import TextButton from '../Common/text-button';
import ListCourses from '../Global/Components/ListCourses/list-courses';

export const AuthorDetail = (props) => {
  const item=props.route.params.item
  const [authorDetail, setAuthorDetail] = useState(null);
  const languageContext = createContext(LanguageContext);
  const language = languageContext.language;

  props.navigation.setOptions({
    title: (language === 'eng') ? 'Author' : 'Thông tin tác giả'
})

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
    <TextButton title={(language === 'eng') ? "FOLLOWING" : "Theo dõi"}/>
    <View style={{margin:10}}>
      <ViewMoreText numberOfLines={3} textStyle={{fontSize: 12}}>
        {(language === 'eng') ? <Text style={{fontWeight:'bold'}}>Skills: {'\n'}</Text> :<Text style={{fontWeight:'bold'}}>Kỹ năng: {'\n'}</Text>} 
        {item.skills.map((skill) => <Text>{skill}{'\n'}</Text>)}
      </ViewMoreText>
    </View>
    <ListCourses title={(language === 'eng') ? "Courses" : "Các khóa học"} courses={authorDetail} navigation={props.navigation}/>
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

