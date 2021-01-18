import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, Alert} from 'react-native'
import ViewMoreText from 'react-native-view-more-text';
import { ListLessions } from './list-lessions';
import { Icon, Rating } from 'react-native-elements';
import { AuthenticationContext, CoursesContext, LanguageContext } from '../../../App';
import { useEffect } from 'react';
import { getCourseDetail } from '../../core/services/courses-service';
import { ActivityIndicator } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import { useRef } from 'react';
import {Video} from 'expo-av'
import getYoutubeID from 'get-youtube-id'
import axios from 'axios'
import { getLikeStatus, hitLikeCourse } from '../../core/services/user-service';

export const CourseDetail = (props) => {
  const item=props.route.params.item
  const coursesContext=useContext(CoursesContext);
  const [bookmarkIcon, setBookmarkIcon] = useState(item.bookmarked === true ? 'bookmark' : 'bookmark-border')
  const [bookmarkText, setBookmarkText] = useState(item.bookmarked === true ? 'Bookmarked' : 'Bookmark')
  const [bookmarkStatus, setBookmarkStatus] = useState('');
  const [downloadIcon, setDownloadIcon] = useState(item.downloaded === true ? 'cloud-done' : 'cloud-download')
  const [downloadText, setDownloadText] = useState(item.downloaded === true ? 'Downloaded' : 'Download')
  const [courseDetail, setCourseDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const authenContext = useContext(AuthenticationContext);
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;
  const videoRef = useRef(null);
  const [video, setVideo] = useState([]);
  const [isYoutube, setIsYoutube] = useState(false);
  const [isShowVideo, setIsShowVideo] = useState(false);

  props.navigation.setOptions({
    title: (language === 'eng') ? 'Course detail' : 'Thông tin khóa học'
  })

  useEffect(() => {
    getCourseDetail(item.id, authenContext.authenState.token).then((res) => {
      setCourseDetail(res);
      setLoading(false);
    })
    getLikeStatus(item.id, authenContext.authenState.token).then(setBookmarkStatus)
  }, [])

  useEffect(() =>{
    if(bookmarkStatus){
      setBookmarkIcon('bookmark')
      setBookmarkText('bookmarked')
    }
    else{
      setBookmarkIcon('bookmark-border')
      setBookmarkText('bookmark')
    }
  }, [bookmarkStatus])

  useEffect(() =>{
    if((video.videoUrl !== '') && (video.videoUrl !== undefined) && (video.videoUrl !== null)){
      setIsYoutube(video.videoUrl.includes('youtube'))
    }
  },[video])

  useEffect(() =>{
    if(video.videoUrl){
      setIsShowVideo(true);
    }
  },[video])

  const changeBookmarkStatus = () => {
    if(bookmarkStatus === true){
      setBookmarkStatus(false)
      hitLikeCourse(item.id, authenContext.authenState.token).then((res) =>{
        coursesContext.setReload(coursesContext.reload + 1)
      });
    }else{
      setBookmarkStatus(true)
      hitLikeCourse(item.id, authenContext.authenState.token).then((res) =>{
        coursesContext.setReload(coursesContext.reload + 1)
      });
    }
  }

  const changeDownloadStatus = () => {
    if(item.downloaded === true){
      item.downloaded = false
      setDownloadIcon('cloud-download')
      setDownloadText('Download')
    }else{
      item.downloaded = true
      setDownloadIcon('cloud-done')
      setDownloadText('Downloaded')
    }
  }

  const renderContentView = () => {
    return(
      <ScrollView showsVerticalScrollIndicator={false} styles={{flex: 1}}>
          <View style={styles.infoContainer}>
            <Text style={styles.textHeader}>{(item.title) ? item.title : item.courseTitle}</Text>
            <Text style={styles.textInfo}>{item["instructor.user.name"] ? item["instructor.user.name"] : item.instructorName}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.textInfo}>{item.requirement ? item.requirement: ''} . {item.createdAt ? item.createdAt.substr(0,10) : ''} . {item.totalHours ? Math.round(item.totalHours) : ''}{'(h)'}</Text>
              <Rating style={{margin:5}} readonly={true} tintColor={styles.darkText} imageSize={12} startingValue={item.ratedNumber ? item.ratedNumber : item.courseContentPoint}/>
              {/* <Text>({item.vote})</Text> */}
            </View>
          </View>
          <View style={styles.iconButtonContainer}>
            <TouchableOpacity onPress={changeBookmarkStatus}>
              <Icon name={bookmarkIcon} type={'material-icons'} size={30}/>
              <Text>{bookmarkText}</Text>
            </TouchableOpacity>  
            <TouchableOpacity onPress={changeDownloadStatus}>
              <Icon name={downloadIcon} type={'material-icons'} size={30}/>
              <Text>{downloadText}</Text>
            </TouchableOpacity>       
          </View>
          <View style={{margin: 10}}>
            <ViewMoreText numberOfLines={3} textStyle={{fontSize: 12}}>
              <Text style={{fontWeight:'bold'}}>Description: </Text>
              <Text>{item.description ? item.description : ''} {'\n'}</Text>
              <Text style={{fontWeight:'bold'}}>Learning what: </Text>
              {item.learnWhat ? item.learnWhat.map((content) => <Text>{content}{'\n'}</Text>): <Text></Text>}
            </ViewMoreText>
          </View>
          <View style={{height:50, backgroundColor: 'gray'}}>
            {(language === 'eng') ? <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Content</Text> :
            <Text style={{textAlign:'center', padding: 10, fontWeight: 'bold', fontSize: 20}}>Nội dung</Text>}
          </View>
          <ListLessions item={courseDetail} setVideo={setVideo}/>
        </ScrollView>
    )
  }

  const getCourse = () =>{
    axios.post('http://api.dev.letstudy.org/payment/get-free-courses', {courseId: item.id},
    {
      headers: {
        Authorization: `Bearer ${authenContext.authenState.token}`}
    }).then((res) => {
      Alert.alert('Đăng ký khóa học thành công!!')
      props.navigation.goBack();
    }).catch((error) => console.log('Get courses: ', error))
  }

  
  if(loading===false){
    if(courseDetail.length !== 0){
      return (
        <View style={{flex: 1}}>
          {
            isShowVideo ? 
            (isYoutube ? 
            <YoutubePlayer ref={videoRef}
            height={250}
            videoId={getYoutubeID(video.videoUrl)}
            play={true}
            /> : 
            <Video source={{uri: video.videoUrl}}
            rate={1.0} volume={1.0} isMuted={false} resizeMode="cover"
            shouldPlay={true}
            style={{height: 250}}
            useNativeControls={true}
            progressUpdateIntervalMillis={5000}
            />)
            : (
              <Image source={{uri: courseDetail.imageUrl}} style={styles.videoPlayer}/>
            )
          } 
          {renderContentView()}       
        </View>
      )
    }
    else{
      return(
        <View>
          <TouchableOpacity style={styles.button} onPress={getCourse}>
            {(language === 'eng') ? <Text style={styles.txt}>Get it free!</Text> :<Text style={styles.txt}>Đăng ký miễn phí!</Text>} 
            
          </TouchableOpacity>
        </View>
      )
    }
  } else{
    return(   
      <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}/>
    )
  }
};

const styles = StyleSheet.create({
  videoPlayer:{
    height: 250,
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
  },
  button:{
    height: 30,
    backgroundColor: '#3faee0',
    padding: 5,
    margin: 30,
    borderRadius: 5
  },
  txt:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  }
})

