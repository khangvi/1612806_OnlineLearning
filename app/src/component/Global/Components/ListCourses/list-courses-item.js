import React from 'react';
import { Text } from 'react-native';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { Rating } from 'react-native-elements';

const ListCoursesItem = (props) => {
    return <TouchableOpacity style={styles.touch} onPress={()=> props.navigation.navigate("CourseDetail", {item:props.item})}>
        <Image source={{uri: props.item.imageUrl}} style={styles.image}/>
        <View style={{marginLeft: 5}} >
            <Text style={styles.textTitle}>{props.item.title}</Text>
            <Text style={styles.darkText}>{props.item.name}</Text>
            <Text style={styles.darkText}>{props.item.requirement} . {Math.round(props.item.totalHours)}{'(h)'}</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Rating readonly={true} tintColor={styles.darkText} imageSize={12} startingValue={props.item.ratedNumber} />
                <Text style={styles.darkText}>({props.item.price} đ)</Text>
            </View>   
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    touch:{
        flexDirection: 'row',
        margin:10,
        backgroundColor:'#f5faf6'
    },
    image:{
        width:60,
        height:60,
        resizeMode:'stretch'
    },
    darkText:{
        color: 'darkgray',
        fontSize:12
    },
    textTitle:{
        fontWeight: 'bold',
    }
})

export default ListCoursesItem;

