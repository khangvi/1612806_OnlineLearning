import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import TextButton from '../../../Common/text-button';

const PopularSkills = (props) => {
    return <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
            props.categories.map(skill => <TextButton title={skill.name} navigation = {props.navigation} id={skill.id}/>)
            }
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        margin:10,
    },
    text:{
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default PopularSkills;

