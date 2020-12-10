import React, { useContext } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { Avatar, Icon } from 'react-native-elements';
import { CoursesContext, UserProfileContext } from '../../../../App';
import ListCourses from '../../Global/Components/ListCourses/list-courses';

export const Download = (props) => {
  const coursesContext=useContext(CoursesContext);
  const downloadedCourses=coursesContext.downloadedCourses;
  const userProfileContext= useContext(UserProfileContext);
  const userProfile = userProfileContext.userProfile;

  props.navigation.setOptions({
    //headerStyle: {backgroundColor: theme.background},
    //headerTitleStyle: {color: theme.foreground},
    headerRight: () => (
        <View style={{flexDirection: 'row'}}>
            <Avatar rounded={true} source={userProfile.avatar} size={'small'}
                                   onPress={()=> props.navigation.navigate("Profile", {user: userProfile})}
            />              
            <Icon containerStyle={{marginLeft: 10, marginRight: 10, marginTop: 5}} name={'settings'} type={'material-icons'} color={'gray'} onPress={() => props.navigation.navigate("Setting")}/>
        </View>)
})
  return( 
    <ScrollView>
      <View style={{margin: 10}}>
        <Text>{downloadedCourses.length} courses</Text>
      </View>
      <ListCourses courses={downloadedCourses} navigation={props.navigation}/>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    
})

