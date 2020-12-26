import React, { useContext } from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native'
import { CoursesContext } from '../../../App';
import ListAuthors from '../Global/Components/ListAuthors/list-authors';
import SectionCourses from '../Global/Components/SectionCourses/section-courses';
import SectionPaths from '../Global/Components/SectionPaths/section-paths';

export const SubjectDetail = (props) => {
  const coursesContext=useContext(CoursesContext);
  const allCourses=coursesContext.allCourses;
  let title=props.route.params.title
  props.navigation.setOptions({title: title})

   const authors=[
    {
      name: 'Deborah Kuata',
      image:{uri:'https://i.imgur.com/fuP5jM4.jpg'}
    },
    {
      name: 'Scott Allen',
      image:{uri:'https://i.imgur.com/VxUkY4P.png'}
    },
    {
      name: 'Joe Eames',
      image:{uri:'https://i.imgur.com/88ZiPwh.jpg'}
    },
    {
      name: 'Jim Cooper',
      image:{uri:'https://i.imgur.com/rr6Nujc.jpg'}
    },
    {
      name: 'Austin Bingham',
      image:{uri:'https://i.imgur.com/vKRt1lU.jpg'}
    },
    {
      name: 'Robert Smallshire',
      image:{uri:'https://i.imgur.com/60pTsel.jpg'}
    },
    {
      name: 'Samer Buna',
      image:{uri:'https://i.imgur.com/qkH3LQ1.jpg'}
    },
    {
      name: 'Mark Zamoyta',
      image:{uri:'https://i.imgur.com/dLQJZIC.jpg'}
    },
    {
      name: 'Simon Allardice',
      image:{uri:'https://i.imgur.com/Rsn0Y44.jpg'}
    },
       
   ]
  return (
  <View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginVertical:10}}>
        <SectionCourses title={`New in ${title}`} courses={allCourses} navigation={props.navigation}/>
      </View>
      <View style={{marginVertical:10}}>
        <SectionCourses title={`Trending in ${title}`} courses={allCourses} navigation={props.navigation}/>
      </View>
      <View>
        <ListAuthors title={`Top authors in ${title}`} authors={authors} navigation={props.navigation}/>
      </View>
    </ScrollView>
  </View>
  )
};