import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import { Rating } from 'react-native-elements';

const CourseScriptInfo = (props) => {
    return <View style={{marginLeft: 5}} >
      <Text style={styles.textTitle}>{(props.item.title) ? props.item.title : props.item.courseTitle}</Text>
      <Text style={styles.darkText}>{props.item["instructor.user.name"] ? props.item["instructor.user.name"] : props.item.instructorName}</Text>
      <Text style={styles.darkText}>{props.item.requirement ? props.item.requirement: ''} . {props.item.createdAt ? props.item.createdAt.substr(0,10) : ''} . {props.item.totalHours ? Math.round(props.item.totalHours) : ''}{'(h)'}</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Rating readonly={true} tintColor={styles.darkText} imageSize={12} startingValue={props.item.ratedNumber ? props.item.ratedNumber : props.item.courseContentPoint} />
        <Text style={styles.darkText}>({props.item.price ? props.item.price : props.item.coursePrice} đ)</Text>
      </View>   
  </View>
};

const styles = StyleSheet.create({
    darkText:{
        color: 'darkgray',
        fontSize:12
    },
    textTitle:{
        fontWeight: 'bold',
    }
})

export default CourseScriptInfo;

