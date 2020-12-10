import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements';

const ListAuthorsItem = (props) => {
    return <TouchableOpacity style={styles.container}
                             onPress={()=> {props.navigation.navigate("AuthorDetail", {item:props.item})}}
    >
        <Avatar 
        size="large"
        rounded
        source={props.item.image}
        />
        <Text style={styles.textName}>{props.item.name}</Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    container:{
        marginRight: 15,
        marginTop:10,
    },
    textName:{
        fontSize: 12,
        textAlign:'center'
    }

})

export default ListAuthorsItem;

