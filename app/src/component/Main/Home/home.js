import React, { useContext } from 'react'
import {StyleSheet, ScrollView, View} from 'react-native'
import { Avatar, Icon } from 'react-native-elements';
import { CoursesContext, UserProfileContext } from '../../../../App';
import SectionCourses from '../../Global/Components/SectionCourses/section-courses';

const Home = (props) => {
    const coursesContext = useContext(CoursesContext);
    const courseList = coursesContext.allCourses;
    const bookmarkedCourses=coursesContext.bookmarkedCourses;
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
    return (
    <ScrollView>
      <SectionCourses title = 'Software Development' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'IT Operations' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'Data Professional' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'Security Professional' courses={courseList} navigation={props.navigation}/>
      <SectionCourses title = 'Bookmarks' courses={bookmarkedCourses} navigation={props.navigation}/>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    home:{
        marginTop: 24,
    },
    header:{
        height:50,
    },
    textHeader:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
    }
});

export default Home;