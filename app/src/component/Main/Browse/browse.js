import React, { useState } from 'react';
import {View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Text} from 'react-native'
import { Tile } from 'react-native-elements';
import PopularSkills from './PopularSkills/popular-skills';

const Browse = (props) => {

    const recommendTopics= [
        {
            name: 'CONFERENCES',
            imageBackground: {uri: 'https://i.imgur.com/VvPDixT.jpg'}
        },
        {
            name: `SOFTWARE DEVELOPMENT`,
            imageBackground: {uri:'https://i.imgur.com/RT6C7tB.jpg'}
        },
        {
            name: `INFORMATION AND CYBER SECURITY`,
            imageBackground: {uri:'https://i.imgur.com/2Y92iPR.jpg'}
        },
        {
            name:`BUSINESS PROFESSIONAL`,
            imageBackground: {uri:'https://i.imgur.com/8nE2OkI.jpg'}
        },
        {
            name: `MANUFACTURING AND DESIGN`,
            imageBackground:{uri:'https://i.imgur.com/XKjrZF4.jpg'}
        },
        {
            name: `CERTIFICATIONS`,
            imageBackground: {uri:'https://i.imgur.com/EtKVlZW.jpg'}
        },
        {
            name: `IT OPS` ,
            imageBackground: {uri:'https://i.imgur.com/NNOIUUH.jpg'}
        },
        {
            name: `DATA PROFESSIONAL`,
            imageBackground: {uri:'https://i.imgur.com/y5dU9aZ.jpg'}
        },
        {   
            name: `CREATIVE PROFESSIONAL`,
            imageBackground: {uri:'https://i.imgur.com/axIrUAF.jpg'}
        },
        {
            name: `ARCHITECTURE AND CONSTRUCTION`,
            imageBackground: {uri:'https://i.imgur.com/BYKGPxV.jpg'}
        }
       ]
       const temp = [];
       const renderRecommended = () =>{
        for(let i = 0; i < 5; i= i + 1){
            temp.push( 
            <View>
                <ImageBackground style={styles.imageTopics} source={recommendTopics[i].imageBackground}>
                    <TouchableOpacity uchableOpacity style={styles.touch}>
                         <Text style={styles.textTopics}>{recommendTopics[i].name}</Text>
                    </TouchableOpacity>    
                </ImageBackground>

                <ImageBackground style={styles.imageTopics} source={recommendTopics[i + 5].imageBackground}>
                    <TouchableOpacity uchableOpacity style={styles.touch}>
                         <Text style={styles.textTopics}>{recommendTopics[i + 5].name}</Text>
                    </TouchableOpacity>    
                </ImageBackground>                                 
            </View>)       
        }
        return temp;
       }
      

    return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       <ImageBackground style={styles.image} source={require('../../../../assets/new_release_theme.jpg')}>
            <TouchableOpacity uchableOpacity style={styles.touch}>
                <Text style={styles.text}>{`NEW\nRELEASE`}</Text>
            </TouchableOpacity>    
        </ImageBackground>

        <ImageBackground style={styles.image} source={require('../../../../assets/recommended.jpg')}>
            <TouchableOpacity uchableOpacity style={styles.touch}>
                <Text style={styles.text}>{`RECOMMENDED\nFOR YOU`}</Text>
            </TouchableOpacity>    
        </ImageBackground>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
            renderRecommended()
        }
        </ScrollView>
        <PopularSkills navigator={props.navigation}/>
    </ScrollView>
};

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        margin:5,
    },
    image:{
        flex:1,
        height: 100,
        resizeMode: 'stretch',
        marginBottom:10,
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    },
    touch:{
        flex:1,
        justifyContent:'center'
    },
    imageTopics:{
        margin: 5,
        height:80,
        width:150,
    },
    textTopics:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    }
})

export default Browse;

