import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Text} from 'react-native'
import { Avatar, Icon } from 'react-native-elements';
import {LanguageContext, UserAvatarContext } from '../../../../App';
import { getAuthors } from '../../../core/services/author';
import { getCategories } from '../../../core/services/category-service';
import { getTopNewCourses } from '../../../core/services/courses-service';
import ListAuthors from '../../Global/Components/ListAuthors/list-authors';
import PopularSkills from './PopularSkills/popular-skills';

const Browse = (props) => {
  const userAvatarContext = useContext(UserAvatarContext);
  const languageContext = useContext(LanguageContext);
  const [authors, setAuthors] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const language = languageContext.language;

  props.navigation.setOptions({
    headerRight: () => (
        <View style={{flexDirection: 'row'}}>
            <Avatar rounded={true} source={{uri: userAvatarContext.userAvatar}} size={'small'}
                                   onPress={()=> props.navigation.navigate("Profile")}
            />              
            <Icon containerStyle={{marginLeft: 10, marginRight: 10, marginTop: 5}} name={'settings'} type={'material-icons'} color={'gray'} onPress={() => props.navigation.navigate("Setting")}/>
        </View>),
                    title: (language === 'eng') ? 'Browse' : "Duyệt"

})

  useEffect(() => {
    getAuthors().then(setAuthors);
    getTopNewCourses().then(setNewCourses);
    getCategories().then(setCategories);
  }, [])

  return( 
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <ImageBackground style={styles.image} source={require('../../../../assets/new_release_theme.jpg')}>
      <TouchableOpacity uchableOpacity style={styles.touch} onPress={() => props.navigation.push("CourseList", {title:"NEW RELESAE", courses: newCourses, navigation: props.navigation})}>
        {(language === 'eng') ? <Text style={styles.text}>{`NEW\nRELEASE`}</Text> :<Text style={styles.text}>{`KHÓA HỌC\nMỚI`}</Text>}
      </TouchableOpacity>    
    </ImageBackground>

    <ImageBackground style={styles.image} source={require('../../../../assets/recommended.jpg')}>
      <TouchableOpacity uchableOpacity style={styles.touch} onPress={() => props.navigation.push("CourseList", {title:"RECOMMENDED FOR YOU", courses: newCourses, navigation: props.navigation})}>
        {(language === 'eng') ? <Text style={styles.text}>{`RECOMMENDED\nFOR YOU`}</Text> :<Text style={styles.text}>{`KHÓA HỌC\nDÀNH CHO BẠN`}</Text>}
      </TouchableOpacity>    
    </ImageBackground>
    <PopularSkills title={(language === 'eng') ? "Category" : "Lĩnh vực"} categories={categories} navigation={props.navigation}/>
    <ListAuthors title={(language === 'eng') ? "Top authors" : "Tác giả hàng đầu"} authors={authors} navigation={props.navigation}/>
  </ScrollView>
  )
};

const styles = StyleSheet.create({
    container:{
        margin:5,
    },
    image:{
        flex:1,
        height: 100,
        resizeMode: 'stretch',
        marginBottom:10,
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    },
    touch:{
        flex:1,
        justifyContent:'center'
    },
    imageTopics:{
        margin: 5,
        height:80,
        width:150,
    },
    textTopics:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    }
})

export default Browse;

