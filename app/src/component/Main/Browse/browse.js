import React, { useState } from 'react';
import {View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Text} from 'react-native'
import { Tile } from 'react-native-elements';
import ListAuthors from '../../Global/Components/ListAuthors/list-authors';
import SectionPaths from '../../Global/Components/SectionPaths/section-paths';
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
       const paths=[
        {
               name: 'CompTIA CySA+ (CS0-002)',
               coursesNum: 6,
               image: {uri:'https://i.imgur.com/0bsNbxQ.jpg'}
        },
        {
            name: 'Microsoft Azure Administrator (AZ-104)',
            coursesNum: 20,
            image: {uri:'https://i.imgur.com/qYugIdF.png'}
        },
        {
            name: 'Working with REST API\'s in JavaScript',
            coursesNum: 6,
            image: {uri:'https://i.imgur.com/W8BRTmC.jpg'}
        },
        {
            name: 'Core Python',
            coursesNum: 15,
            image: {uri:'https://i.imgur.com/x48JzSC.png'}
        },
        {
            name: 'Building Web Applications with React',
            coursesNum: 10,
            image: {uri:'https://i.imgur.com/OyGbEAo.png'}
        }
       ]
       const authors=[
        {
            name: 'Deborah Kuata',
            image:{uri:'https://i.imgur.com/fuP5jM4.jpg'}
        },
        {
            name: 'Scott Allen',
            image:{uri:'https://i.imgur.com/VxUkY4P.png'}
        },
        {
            name: 'Joe Eames',
            image:{uri:'https://i.imgur.com/88ZiPwh.jpg'}
        },
        {
            name: 'Jim Cooper',
            image:{uri:'https://i.imgur.com/rr6Nujc.jpg'}
        },
        {
            name: 'Austin Bingham',
            image:{uri:'https://i.imgur.com/vKRt1lU.jpg'}
        },
        {
            name: 'Robert Smallshire',
            image:{uri:'https://i.imgur.com/60pTsel.jpg'}
        },
        {
            name: 'Samer Buna',
            image:{uri:'https://i.imgur.com/qkH3LQ1.jpg'}
        },
        {
            name: 'Mark Zamoyta',
            image:{uri:'https://i.imgur.com/dLQJZIC.jpg'}
        },
        {
            name: 'Simon Allardice',
            image:{uri:'https://i.imgur.com/Rsn0Y44.jpg'}
        },
           
       ]
       const temp = [];
       const renderRecommended = () =>{
        for(let i = 0; i < 5; i= i + 1){
            temp.push( 
            <View>
                <ImageBackground style={styles.imageTopics} source={recommendTopics[i].imageBackground}>
                    <TouchableOpacity uchableOpacity style={styles.touch}         
                    >
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
            <TouchableOpacity uchableOpacity style={styles.touch} onPress={() => {props.navigation.push("CourseList")}}>
                <Text style={styles.text}>{`NEW\nRELEASE`}</Text>
            </TouchableOpacity>    
        </ImageBackground>

        <ImageBackground style={styles.image} source={require('../../../../assets/recommended.jpg')}>
            <TouchableOpacity uchableOpacity style={styles.touch}>
                <Text style={styles.text}>{`RECOMMENDED\nFOR YOU`}</Text>
            </TouchableOpacity>    
        </ImageBackground>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderRecommended()}
        </ScrollView>
        <PopularSkills navigator={props.navigation}/>
        <SectionPaths title='Paths' paths = {paths} navigator={props.navigation}/>
        <ListAuthors title='Top authors' authors={authors} navigator={props.navigation}/>
    </ScrollView>
};

const styles = StyleSheet.create({
    container:{
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

