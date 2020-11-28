import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import TextButton from '../../../Common/text-button';

const PopularSkills = (props) => {
    const skills=[{title : 'Angular'}, {title:'JavaScript'}, {title: 'C#'}, {title: 'Java'}, {title: 'Data Analysis'}, {title:'ASP.NET'}, {title: 'Node.js'}, {title: 'Design Pattern'}, {title:'Python'}, {title:'React'}, {title:'.Net'}, {title: 'SQL Server'}, {title: 'Database Administration'}, {title: 'Part Modeling'}];
    return <View style={styles.container}>
        <Text style={styles.text}>Popular Skills</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
            skills.map(skill => <TextButton item={skill} navigator = {props.navigation}/>)
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

