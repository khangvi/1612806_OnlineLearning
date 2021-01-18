import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../app/src/component/Main/Home/home";
import Browse from './src/component/Main/Browse/browse';
import {Icon} from 'react-native-elements';
import Search from './src/component/Main/Search/search';
import ListCourses from './src/component/Global/Components/ListCourses/list-courses';
import {CourseDetail} from "./src/component/CourseDetail/course-detail";
import { AuthorDetail } from './src/component/AuthorDetail/author-detail';
import { getAllCourses, getBookmarkedCourses, getDownloadedCourses } from './src/core/services/courses-service';
import Login from './src/component/Authentication/login';
import { SplashScreen } from './src/component/SplashScreen/splash-screen';
import { Profile } from './src/component/Account/profile';
import { Register } from './src/component/Authentication/register';
import { useReducer } from 'react';
import { reducer } from './src/core/reducers/authen-reducer';
import { login, logout } from './src/core/services/authen-service';
import { useEffect } from 'react';
import { ForgotPassword } from './src/component/Authentication/forgot-password';
import { ChangePassword } from './src/component/Authentication/change-password';
import { SubjectDetail } from './src/component/SubjectDetail/subject-detail';
import { SafeAreaView } from 'react-native';

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
          <screenStack.Screen name={"SubjectDetail"} component={SubjectDetail}/>
          <screenStack.Screen name={"ChangePassword"} component={ChangePassword}/>
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
        <screenStack.Screen name={"ChangePassword"} component={ChangePassword}/>
      </screenStack.Navigator>
  );
};

const searchStack = () => {
  return (
    <screenStack.Navigator initialRouteName={"Search"} screenOptions={{headerShown: false}}>
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
      <Tab.Screen name="Browse" component={browseStack}/>
      <Tab.Screen name="Search" component={searchStack}/>
    </Tab.Navigator>
  )
}

const LoginStack = () =>{
  return (
    <mainStack.Navigator initialRouteName={"Login"} screenOptions={{headerShown: false, headerBackTitleVisible: false}}>
      <mainStack.Screen name="Login" component={Login}/>
      <mainStack.Screen name="Register" component={Register}/>
      <mainStack.Screen name="ForgotPassword" component={ForgotPassword}/>
    </mainStack.Navigator>
  )
}

export const CoursesContext = createContext();
export const UserProfileContext = createContext();
export const AuthenticationContext = createContext();
export const UserAvatarContext = createContext();

const initAuthenState = {
  isAuthenticated: false,
  userInfo: null,
  token: null,
  message: ''
}

export default function App() {
  const [authenState, dispatch] = useReducer(reducer, initAuthenState);
  const [userProfile, setUserProfile] = useState(null);
  const [downloadedCourses, setDownloadedCourses]=useState(getDownloadedCourses);
  const [bookmarkedCourses, setBookmarkedCourses]=useState(getBookmarkedCourses);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userAvatar, setUserAvatar] = useState('');
  const [reload, setReload] = useState(0);

  useEffect(() => {
    if(authenState.userInfo !== null) {
      setUserAvatar(authenState.userInfo.avatar)
    }
  }, [authenState.userInfo])

  return (
      <UserAvatarContext.Provider value={{userAvatar, setUserAvatar}}>
        <AuthenticationContext.Provider value={{authenState, login: login(dispatch), logout: logout(dispatch)}}>
          <UserProfileContext.Provider value={{ userProfile, setUserProfile, isSignedIn, setIsSignedIn, setIsLoading}}>
            <CoursesContext.Provider value={{reload, setReload, downloadedCourses, setDownloadedCourses, bookmarkedCourses, setBookmarkedCourses}} >
              <NavigationContainer>
                {isLoading ? (
                  <SplashScreen/>
                ) : (
                  authenState.isAuthenticated ? (
                    <MainTabNavigation/>
                  ) : (
                    <LoginStack/>
                  )
                )}
              </NavigationContainer>
            </CoursesContext.Provider>
          </UserProfileContext.Provider>
        </AuthenticationContext.Provider>
      </UserAvatarContext.Provider>    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
