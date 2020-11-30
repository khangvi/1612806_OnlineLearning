import React from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native'
import ListAuthors from '../Global/Components/ListAuthors/list-authors';
import SectionCourses from '../Global/Components/SectionCourses/section-courses';
import SectionPaths from '../Global/Components/SectionPaths/section-paths';

export const SubjectDetail = (props) => {
  let title=props.route.params.title
  props.navigation.setOptions({title: title})

  const paths=[
    {
           name: 'CompTIA CySA+ (CS0-002)',
           coursesNum: 6,
           image: {uri:'https://i.imgur.com/0bsNbxQ.jpg'}
    },
    {
        name: 'Microsoft Azure Administrator (AZ-104)',
        coursesNum: 20,
        image: {uri:'https://i.imgur.com/qYugIdF.png'}
    },
    {
        name: 'Working with REST API\'s in JavaScript',
        coursesNum: 6,
        image: {uri:'https://i.imgur.com/W8BRTmC.jpg'}
    },
    {
        name: 'Core Python',
        coursesNum: 15,
        image: {uri:'https://i.imgur.com/x48JzSC.png'}
    },
    {
        name: 'Building Web Applications with React',
        coursesNum: 10,
        image: {uri:'https://i.imgur.com/OyGbEAo.png'}
    }
   ]
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
        <SectionPaths title={`Path in ${title}`} paths={paths} navigation={props.navigation}/>
      </View>
      <View style={{marginVertical:10}}>
        <SectionCourses title={`New in ${title}`} navigation={props.navigation}/>
      </View>
      <View style={{marginVertical:10}}>
        <SectionCourses title={`Trending in ${title}`} navigation={props.navigation}/>
      </View>
      <View>
        <ListAuthors title={`Top authors in ${title}`} authors={authors} navigation={props.navigation}/>
      </View>
    </ScrollView>
  </View>
  )
};