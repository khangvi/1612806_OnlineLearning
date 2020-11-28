import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
import ListCourses from '../../Global/Components/ListCourses/list-courses';

const Search = (props) => {
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
    return <View showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input}
                   placeholder="Seach.."

        />

        <ListCourses title=" metmoi" courses={data}/>
    </View>
};

const styles = StyleSheet.create({
    input:{
        marginTop: 50,
        height: 60,
        padding: 5,
    }
})

export default Search;

