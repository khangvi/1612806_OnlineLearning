import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import ListAuthorsItem from '../ListAuthorsItem/list-authors-item';

//props: title, authors: list of author
const ListAuthors = (props) => {
    return <View style={styles.container}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {props.authors.map(author => <ListAuthorsItem item={author} navigation={props.navigation}/>)}
          </ScrollView>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    textTitle:{
        fontSize: 17,
        fontWeight:'bold',
    }
})

export default ListAuthors;

