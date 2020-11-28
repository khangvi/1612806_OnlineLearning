import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import CourseScriptInfo from "../Global/Components/CourseItem/course-script-info";
import {IconButton} from "../Common/icon-button";

export const CourseDetail = ({item}) => {
  const [count, setCount] = useState(3)
  return (
    <ScrollView>
      <View style={styles.videoPlayer}>
        <Text>
          video player
        </Text>
      </View>
      <View>
        <Text style={styles.textHeader}>{item.title}</Text>
        <Text style={styles.textInfo}>{item.level} . {item.released} . {item.duration}</Text>
      </View>
      <Text>{count}</Text>
      <View style={styles.iconButtonContainer}>
        <IconButton icon={require('../../../assets/icon.png')} text={'Cacnkjdhgjks'} onPressButton={() => {
          setCount(count+1)
        }} />
        <IconButton icon={require('../../../assets/icon.png')} text={'Cacnkjdhgjks'} />
        <IconButton icon={require('../../../assets/icon.png')} text={'Cacnkjdhgjks'} />
      </View>

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  videoPlayer:{
    height: 300
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

