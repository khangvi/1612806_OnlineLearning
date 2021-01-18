import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import ListAuthorsItem from '../ListAuthorsItem/list-authors-item';

//props: title, authors: list of author
const ListAuthors = ({authors, title, navigation}) => {
    return <View style={styles.container}>
        <Text style={styles.textTitle}>{title}</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {authors.map(author => <ListAuthorsItem item={author} navigation={navigation}/>)}
          </ScrollView>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        margin:5,
    },
    textTitle:{
        fontSize: 17,
        fontWeight:'bold',
    }
})

export default ListAuthors;

