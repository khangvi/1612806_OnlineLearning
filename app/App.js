import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../app/src/component/Main/Home/home";
import Browse from './src/component/Main/Browse/browse';
import {Icon} from 'react-native-elements';
import {Download} from './src/component/Main/Download/download';
import Search from './src/component/Main/Search/search';
import ListCourses from './src/component/Global/Components/ListCourses/list-courses';
import {CourseDetail} from "./src/component/CourseDetail/course-detail";
import { AuthorDetail } from './src/component/AuthorDetail/author-detail';
import { PathDetail } from './src/component/PathDetail/path-detail';
import { SubjectDetail } from './src/component/SubjectDetail/subject-detail';
import { getAllCourses, getBookmarkedCourses, getDownloadedCourses } from './src/core/services/courses-service';
import Login from './src/component/Authentication/login';
import { SplashScreen } from './src/component/SplashScreen/splash-screen';
import { Profile } from './src/component/Account/profile';

const Tab = createBottomTabNavigator();
const screenStack = createStackNavigator();
const mainStack = createStackNavigator();

const browseStack = () => {
  return (
      <screenStack.Navigator initialRouteName={"Browse"} mode={'modal'}>
          <screenStack.Screen name={"Browse"} component={Browse}/>
          <screenStack.Screen name={"CourseList"} component={ListCourses}/>
          <screenStack.Screen name={"AuthorDetail"} component={AuthorDetail}/>
          <screenStack.Screen name={"CourseDetail"} component={CourseDetail}/>
          <screenStack.Screen name={"PathDetail"} component={PathDetail}/>
          <screenStack.Screen name={"SubjectDetail"} component={SubjectDetail}/>
          <screenStack.Screen name={"Profile"} component={Profile}/>
      </screenStack.Navigator>
  );
};

const homeStack = () => {
  return (
      <screenStack.Navigator initialRouteName={"Home"} mode={'modal'}>
        <screenStack.Screen name={"Home"} component={Home}/>
        <screenStack.Screen name={"CourseDetail"} component={CourseDetail}/>
        <screenStack.Screen name={"CourseList"} component={ListCourses}/>
        <screenStack.Screen name={"Profile"} component={Profile}/>
      </screenStack.Navigator>
  );
};
const downloadStack = () =>{
  return (
    <screenStack.Navigator initialRouteName={"Download"} mode={'modal'}>
      <screenStack.Screen name={"Download"} component={Download}/>
      <screenStack.Screen name={"CourseDetail"} component={CourseDetail}/>
      <screenStack.Screen name={"Profile"} component={Profile}/>
    </screenStack.Navigator>
    )
}

const searchStack = () => {
  return (
    <screenStack.Navigator initialRouteName={"Download"} screenOptions={{headerShown: false}}>
       <screenStack.Screen name={"Search"} component={Search}/>
      <screenStack.Screen name={"CourseDetail"} component={CourseDetail}/>
    </screenStack.Navigator>
  )
}

const MainTabNavigation = () =>{
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === "Home") {
              iconName = 'home';
          } else if (route.name === "Download") {
              iconName = 'get-app';
          } else if (route.name === "Browse") {
              iconName = 'explore';
          } else if (route.name === "Search") {
              iconName = 'search';
          }
          return <Icon name={iconName} type={'material-icons'} size={size} color={color}/>;
      },
  })}
    tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'white'}
    }}
    >
      <Tab.Screen name="Home" component={homeStack}/>
      <Tab.Screen name="Download" component={downloadStack}/>
      <Tab.Screen name="Browse" component={browseStack}/>
      <Tab.Screen name="Search" component={searchStack}/>
    </Tab.Navigator>
  )
}

const LoginStack = () =>{
  return (
    <mainStack.Navigator initialRouteName={"Login"} screenOptions={{headerShown: false, headerBackTitleVisible: false}}>
      <mainStack.Screen name="Login" component={Login}/>
    </mainStack.Navigator>
  )
}

export const CoursesContext = createContext();
export const UserProfileContext = createContext();
//export const ThemeContext = createContext();

export default function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [allCourses, setAllCourses]=useState(getAllCourses);
  const [downloadedCourses, setDownloadedCourses]=useState(getDownloadedCourses);
  const [bookmarkedCourses, setBookmarkedCourses]=useState(getBookmarkedCourses);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

   

  return (
      <UserProfileContext.Provider value={{userProfile, setUserProfile, isSignedIn, setIsSignedIn, setIsLoading}}>
      <CoursesContext.Provider value={{allCourses, downloadedCourses, setDownloadedCourses, bookmarkedCourses, setBookmarkedCourses}} >
        <NavigationContainer>
        {isLoading ? (
          <SplashScreen/>
        ) : (
          isSignedIn ? (
            <MainTabNavigation/>
          ) : (
            <LoginStack/>
          )
        )}
        </NavigationContainer>
      </CoursesContext.Provider>
     </UserProfileContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
