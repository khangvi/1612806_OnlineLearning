import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import SectionPathsItem from './section-paths-item';

//props: title, paths: list of paths

const SectionPaths = (props) => {
    return <View>
        <View>
            <Text style={styles.textTitle}>{props.title}</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {props.paths.map(path => <SectionPathsItem item = {path} navigator={props.navigation}/>)}
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({
    textTitle:{
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10
    }
})

export default SectionPaths;

