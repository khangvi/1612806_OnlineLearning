import React from 'react';
import { useContext } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native'
import { AuthenticationContext } from '../../../App';
import axios from 'axios'
import { getLessonVideo } from '../../core/services/video-service';

export const ListLessions = (props) => {
  const authenContext = useContext(AuthenticationContext);
  const lessonButton = (lesson) =>{
    getLessonVideo(props.item.id, lesson.id, authenContext.authenState.token).then(props.setVideo)
  }

  const RenderContentList = ({item}) =>{
    return(
    <ScrollView style={styles.container}>
      <View style={styles.contentLession}>
        <View style={styles.square}>
        </View>
        <View style={styles.contentInfo}>
          <Text style={{fontWeight:'bold', marginBottom: 5}}>{item.name}</Text>
          <Text style={{fontSize:12}}>{item.totalTime}</Text>
        </View>
      </View>
      <View style={styles.contentList}>
        {item.lesson.map((content) => 
          <TouchableOpacity style={styles.touchContent} onPress={()=>{lessonButton(content)}}>
            <Image source={require('../../../assets/point-icon.png')} style={styles.icon}/>
            <View style={{flex: 1,flexDirection:'row'}}>
            <Text style={{flex:15, fontSize:11, fontWeight:'bold'}}>{content.name}</Text>
            <Text style={{flex:1, fontSize:11, color:'gray'}}>{content.hours}</Text>
            </View>    
          </TouchableOpacity>)
        }
      </View>
    </ScrollView>
    )
  }
  const getCourse = () =>{
    axios.post('http://api.dev.letstudy.org/payment/get-free-courses',{courseId: props.item.id},
    {
      headers: {Authorization: `Bearer ${authenContext.authenState.token}`}
    }).then((res) => {
      //props.navigation.push("CourseDetail"), {item: props.item.id, navigation: props.navigation}
    }).catch((error) => console.log('Get courses: ', error))
  }

  if(props.item.section){
    return (
      <View style={{flex:1}}>
            {
              props.item.section.map((item) => <RenderContentList item={item}/>)
            }
      </View>
    )
  } else{
    return(
      <View>
        <TouchableOpacity style={styles.button} onPress={getCourse}>
          <Text style={styles.txt}>Get it free!</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 10,
    },
    contentLession:{
      flexDirection:'row',
      height:50,
    },
    square:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width:50,
      backgroundColor:'lightgray',
      margin:5,
    },
    contentInfo:{
      margin: 5,
    },
    contentList:{
      marginTop:20,
    },
    touchContent:{
      flexDirection:'row',
      margin:5,
    },
    icon:{
      height:15,
      width:15,
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

