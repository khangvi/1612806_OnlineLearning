import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import {IconButton} from "../Common/icon-button";
import ViewMoreText from 'react-native-view-more-text';
import { ListLessions } from './list-lessions';



export const CourseDetail = (props) => {
  const item=props.route.params.item
  const lessions=[
    {
      id:1,
      name: 'Course Overview',
      totalTime:'1:27',
      listContent:[{name:'Course Overview', time:'1:27'}]
    },
    {
      id:2,
      name: 'Introducing C# and .NET',
      totalTime:'46:04',
      listContent:[{name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'}
    ]
    },
    {
      id:3,
      name: 'Learning C# Syntax',
      totalTime:'35:40',
      listContent:[{name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'}    ]
    },
    {
      id:4,
      name: 'Working with Classes and Objects',
      totalTime:'45:07',
      listContent:[{name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'}
    ]
    },
    {
      id:5,
      name: 'Testing Your Code',
      totalTime:'35:13',
      listContent:[{name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'}    ]
    },
    {
      id:6,
      name: 'Working with Reference Types and Value Types',
      totalTime:'45:20',
      listContent:[{name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'},
      {name:'Introduction', time:'1:01'}, {name:'Downloading .NET for Windows, macOS, and Linux', time:'2:35'}
    ]
    },

  ]
  return (
    <View>
      <View style={styles.videoPlayer}>
        <Image source={{uri: 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-play-icon-png-image_695339.jpg'}}
              style={{height: 200, width: 200}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>{item.title}</Text>
          <Text style={styles.textInfo}>{item.level} . {item.released} . {item.duration}</Text>
        </View>
        <View style={styles.iconButtonContainer}>
          <IconButton icon={require('../../../assets/bookmark-icon.png')} text={'Bookmark'} onPressButton={() => {
            
          }} />
          <IconButton icon={require('../../../assets/add-channel-icon.png')} text={'Add to Channel'} />
          <IconButton icon={require('../../../assets/download-icon.png')} text={'Download'} />
        </View>
        <View style={{margin: 10}}>
          <ViewMoreText numberOfLines={3} textStyle={{fontSize: 12}}>
            <Text>demo text demo text demo text demo text demo text demo text demo text demo text 
                  demo text demo text demo text demo text demo text demo text demo text demo text 
                  demo text demo text demo text demo text demo text demo text demo text demo text 
                  demo text demo text demo text demo text demo text demo text demo text demo text 
            </Text>
          </ViewMoreText>
        </View>
        <View style={{height:50, backgroundColor: 'gray'}}></View>
        <ListLessions lessions={lessions}/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  videoPlayer:{
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer:{
    margin:5,
  },
  textHeader:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInfo:{
    color: 'darkgray'
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around"
  }
})

