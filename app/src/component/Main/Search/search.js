import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
import ListCourses from '../../Global/Components/ListCourses/list-courses';

const Search = (props) => {
    return <View showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input}
                   placeholder="Seach.."

        />
      {/* <ListCourses title="metmoi"/> */}
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

