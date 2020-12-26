import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import {StyleSheet, ScrollView, View} from 'react-native'
import { Avatar, Icon } from 'react-native-elements';
import { AuthenticationContext, CoursesContext, UserAvatarContext, UserProfileContext } from '../../../../App';
import { getBookmarkedCourses, getContinueCourses, getTopNewCourses, getTopRateCourses, getTopSellCourses } from '../../../core/services/courses-service';
import SectionCourses from '../../Global/Components/SectionCourses/section-courses';

const Home = (props) => {

    const authenContext = useContext(AuthenticationContext);
    const coursesContext = useContext(CoursesContext);
    const courseList = coursesContext.allCourses;
    const [topNewCourses, setTopNewCourses] = useState([])
    const userAvatarContext = useContext(UserAvatarContext);
    const [topSellCourses, setTopSellCourses] = useState([]);
    const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [continueCourses, setContinueCourses] = useState([]);
    const [topRatedCourses, setTopRatedCourses] = useState([]);

    props.navigation.setOptions({
        //headerStyle: {backgroundColor: theme.background},
        //headerTitleStyle: {color: theme.foreground},
        headerRight: () => (
            <View style={{flexDirection: 'row'}}>
                <Avatar rounded={true} source={{uri: userAvatarContext.userAvatar}} size={'small'}
                                       onPress={()=> props.navigation.navigate("Profile")}
                />              
                <Icon containerStyle={{marginLeft: 10, marginRight: 10, marginTop: 5}} name={'settings'} type={'material-icons'} color={'gray'} />
            </View>)
    })

    useEffect(() => {
        getTopNewCourses().then(setTopNewCourses);
        getTopSellCourses().then(setTopSellCourses);
        getTopRateCourses().then(setTopRatedCourses);
        getContinueCourses(authenContext.authenState.token).then(setContinueCourses)
        getBookmarkedCourses(authenContext.authenState.token).then(setBookmarkedCourses);
    }, []) 

    useEffect(() =>{
        if(bookmarkedCourses.length!==0){
            setLoading(false)
        }
    })

    if(loading === false){
        return (       
            <ScrollView>
              <SectionCourses title = 'Top News ' courses={topNewCourses} navigation={props.navigation}/>
              <SectionCourses title = 'Best Seller' courses={topSellCourses} navigation={props.navigation}/>
              <SectionCourses title = 'Top Rated' courses={topRatedCourses} navigation={props.navigation}/>
              <SectionCourses title = 'Bookmarks' courses={topNewCourses} navigation={props.navigation}/>
            </ScrollView>
            )
    } else {
        return(
            <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignContent: 'center'}}/>   
        )
    }
    
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