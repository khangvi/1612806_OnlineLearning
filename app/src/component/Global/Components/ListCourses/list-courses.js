import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native'
import ListCoursesItem from './list-courses-item';
import { Divider } from 'react-native-elements';


const ListCourses = (props) => {
    const data = [
        {
            id: 1,
            title: 'React',
            author: 'Hai Pham',
            level: 'Intermediate',
            released: 'Nov 2020',
            duration: '40 hours',
            image: {uri: 'https://i.imgur.com/8nE2OkI.jpg'}
        },
        {
            id: 2,
            title: 'Android',
            author: 'Tuan Nguyen',
            level: 'Beginner',
            released: 'Nov 2020',   
            duration: '35 hours',
            image: {uri: 'https://i.imgur.com/VvPDixT.jpg'}
        },
        {
            id: 3,
            title: 'IOS',
            author: 'Tri Nguyen',
            level: 'Master',
            released: 'Nov 2020',
            duration: '11 hours',
            image: {uri: 'https://i.imgur.com/BYKGPxV.jpg'}
        },
        {
            id: 1,
            title: 'React',
            author: 'Hai Pham',
            level: 'Intermediate',
            released: 'Nov 2020',
            duration: '40 hours',
            image: {uri: 'https://i.imgur.com/8nE2OkI.jpg'}
        },
        {
            id: 2,
            title: 'Android',
            author: 'Tuan Nguyen',
            level: 'Beginner',
            released: 'Nov 2020',   
            duration: '35 hours',
            image: {uri: 'https://i.imgur.com/VvPDixT.jpg'}
        },
        {
            id: 3,
            title: 'IOS',
            author: 'Tri Nguyen',
            level: 'Master',
            released: 'Nov 2020',
            duration: '11 hours',
            image: {uri: 'https://i.imgur.com/BYKGPxV.jpg'}
        },
        {
            id: 1,
            title: 'React',
            author: 'Hai Pham',
            level: 'Intermediate',
            released: 'Nov 2020',
            duration: '40 hours',
            image: {uri: 'https://i.imgur.com/8nE2OkI.jpg'}
        },
        {
            id: 2,
            title: 'Android',
            author: 'Tuan Nguyen',
            level: 'Beginner',
            released: 'Nov 2020',   
            duration: '35 hours',
            image: {uri: 'https://i.imgur.com/VvPDixT.jpg'}
        },
        {
            id: 3,
            title: 'IOS',
            author: 'Tri Nguyen',
            level: 'Master',
            released: 'Nov 2020',
            duration: '11 hours',
            image: {uri: 'https://i.imgur.com/BYKGPxV.jpg'}
        },
        {
            id: 1,
            title: 'React',
            author: 'Hai Pham',
            level: 'Intermediate',
            released: 'Nov 2020',
            duration: '40 hours',
            image: {uri: 'https://i.imgur.com/8nE2OkI.jpg'}
        },
        {
            id: 2,
            title: 'Android',
            author: 'Tuan Nguyen',
            level: 'Beginner',
            released: 'Nov 2020',   
            duration: '35 hours',
            image: {uri: 'https://i.imgur.com/VvPDixT.jpg'}
        },
        {
            id: 3,
            title: 'IOS',
            author: 'Tri Nguyen',
            level: 'Master',
            released: 'Nov 2020',
            duration: '11 hours',
            image: {uri: 'https://i.imgur.com/BYKGPxV.jpg'}
        },
    ]

    return <View>
        <Text style={styles.textTitle}>{props.title}</Text>
        <FlatList
            data={data}
            renderItem={({item}) => <ListCoursesItem item = {item} navigation={props.navigation}/>}
            keyExtractor={item => item.ID}
            ItemSeparatorComponent={({item}) => <Divider style={{width:'95%', backgroundColor:'black', marginLeft:10}}/>}
        />  
    </View>
};

const styles = StyleSheet.create({
    textTitle:{
        margin: 10,
    }
})

export default ListCourses;

