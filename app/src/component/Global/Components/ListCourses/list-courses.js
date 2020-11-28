import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native'
import ListCoursesItem from './list-courses-item';

const ListCourses = (props) => {

    return <View>
        <Text style={styles.textTitle}>{props.title}</Text>
        <FlatList
            data={props.courses}
            renderItem={({item}) => <ListCoursesItem item = {item}/>}
        />  
    </View>
};

const styles = StyleSheet.create({
    textTitle:{
        margin: 10,
        marginBottom: 20
    }
})

export default ListCourses;

