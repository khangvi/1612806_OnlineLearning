import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import ViewMoreText from 'react-native-view-more-text';
import { ListLessions } from './list-lessions';
import { Icon, Rating } from 'react-native-elements';
import { CoursesContext } from '../../../App';



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

  const coursesContext=useContext(CoursesContext);
  const [bookmarkIcon, setBookmarkIcon] = useState(item.bookmarked === true ? 'bookmark' : 'bookmark-border')
  const [bookmarkText, setBookmarkText] = useState(item.bookmarked === true ? 'Bookmarked' : 'Bookmark')
  const [downloadIcon, setDownloadIcon] = useState(item.downloaded === true ? 'cloud-done' : 'cloud-download')
  const [downloadText, setDownloadText] = useState(item.downloaded === true ? 'Downloaded' : 'Download')

  const changeBookmarkStatus = () => {
    if(item.bookmarked === true){
      item.bookmarked = false
      //coursesContext.bookmarkedCourses.filter(i => i.id === item.id )
      setBookmarkIcon('bookmark-border')
      setBookmarkText('bookmark')
    }else{
      item.bookmarked = true
      coursesContext.bookmarkedCourses.push(item)
      setBookmarkIcon('bookmark')
      setBookmarkText('bookmarked')
    }
  }

  const changeDownloadStatus = () => {
    if(item.downloaded === true){
      item.downloaded = false
      setDownloadIcon('cloud-download')
      setDownloadText('Download')
    }else{
      item.downloaded = true
      coursesContext.downloadedCourses.push(item)
      setDownloadIcon('cloud-done')
      setDownloadText('Downloaded')
    }
  }

  
  return (
    <View>
      <View style={styles.videoPlayer}>
        <Image source={item.image}
              style={{height: 200, width: 200}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>{item.title}</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.textInfo}>{item.level} . {item.released} . {item.duration}</Text>
            <Rating style={{margin:5}} readonly={true} tintColor={styles.darkText} imageSize={12} startingValue={item.star} />
            <Text>({item.vote})</Text>
          </View>
        </View>
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity onPress={changeBookmarkStatus}>
            <Icon name={bookmarkIcon} type={'material-icons'} size={30}/>
            <Text>{bookmarkText}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={'add-to-queue'} type={'material-icons'} size={30}/>
            <Text>Add to Channel</Text>
          </TouchableOpacity>    
          <TouchableOpacity onPress={changeDownloadStatus}>
            <Icon name={downloadIcon} type={'material-icons'} size={30}/>
            <Text>{downloadText}</Text>
          </TouchableOpacity>       
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

