import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import { Rating } from 'react-native-elements';

const CourseScriptInfo = (props) => {
    return <View style={{marginLeft: 5}} >
      <Text style={styles.textTitle}>{props.item.title}</Text>
      <Text style={styles.darkText}>{props.item.author}</Text>
      <Text style={styles.darkText}>{props.item.level} . {props.item.released} . {props.item.duration}</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Rating readonly={true} tintColor={styles.darkText} imageSize={12} startingValue={props.item.star} />
        <Text style={styles.darkText}>({props.item.vote})</Text>
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

