import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import { Rating } from 'react-native-elements';

const CourseScriptInfo = (props) => {
    return <View style={{marginLeft: 5}} >
      <Text style={styles.textTitle}>{props.item.title}</Text>
      <Text style={styles.darkText}>{props.item["instructor.user.name"]}</Text>
      <Text style={styles.darkText}>{props.item.requirement} . {props.item.createdAt.substr(0,10)} . {Math.round(props.item.totalHours)}{'(h)'}</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Rating readonly={true} tintColor={styles.darkText} imageSize={12} startingValue={props.item.ratedNumber} />
        <Text style={styles.darkText}>({props.item.price} đ)</Text>
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

