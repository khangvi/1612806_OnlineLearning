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
import { getLastWatchedVideo, setFinishVideo, setTimeVideo } from '../../core/services/video-service';
import { reducer } from '../../core/reducers/authen-reducer';

export const CourseDetail = (props) => {
  const item=props.route.params.item
  const coursesContext=useContext(CoursesContext);
  const [bookmarkIcon, setBookmarkIcon] = useState(item.bookmarked === true ? 'bookmark' : 'bookmark-border')
  const [bookmarkText, setBookmarkText] = useState(item.bookmarked === true ? 'Bookmarked' : 'Bookmark')
  const [bookmarkStatus, setBookmarkStatus] = useState('');
  const [courseDetail, setCourseDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const authenContext = useContext(AuthenticationContext);
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;
  const videoRef = useRef(null);
  const [video, setVideo] = useState([]);
  const [isYoutube, setIsYoutube] = useState(false);
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [currentLessonId, setCurrentLessonId] = useState([]);

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

  useEffect(() => {
    if(courseDetail !== null && courseDetail !== undefined) {
      getLastWatchedVideo(courseDetail.id, authenContext.authenState.token).then((res) => {
        if(res.length !== 0){
          setCurrentLessonId(res.lessonId);
          setVideo(res.video);
        }
      })
    }
  }, [courseDetail])

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
    if(video.videoUrl !== undefined && video.videoUrl !== null){
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

  const updateYoutubeVideoStatus = async (state) =>{
    if(state === 'unstarted'){
      await videoRef.current.seekTo(video.currentTime, true)
    }
    else if(state === 'paused'){
      await videoRef.current.getCurrentTime().then((res) => {
        const time = Number(res.toFixed(0));
        if(time !== 0){
          setTimeVideo(currentLessonId, time, authenContext.authenState.token);
        }
      })
    }
    else if(state === 'ended') {
      if(video.isFinish === false){
        await setFinishVideo(currentLessonId, authenContext.authenState.token);
      }
    }
  }

  const updateAVVideoStatus = async (state) => {
    if(state.isPlaying === false) {
      if(state.didJustFinish === true){
        if(video.isFinish === false){
          await setFinishVideo(currentLessonId, authenContext.authenState.token);
        }
      }
      else {
        const time = Number((state.positionMillis / 1000).toFixed(0));
        await setTimeVideo(currentLessonId, time, authenContext.authenState.token);
      }
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
            onChangeState={(state) => updateYoutubeVideoStatus(state)}
            /> : 
            <Video source={{uri: video.videoUrl}}
            rate={1.0} volume={1.0} isMuted={false} resizeMode="cover"
            shouldPlay={true}
            style={{height: 250}}
            useNativeControls={true}
            progressUpdateIntervalMillis={5000}
            onPlaybackStatusUpdate={(state) => updateAVVideoStatus(state)}
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

