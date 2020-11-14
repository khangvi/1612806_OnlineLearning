import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../app/src/component/Main/Home/home";
import Login from "../app/src/component/Authentication/login";
import ListCourses from './src/component/Courses/ListCourses/list-courses';
import Browse from './src/component/Main/Browse/browse';
import {Avatar, Icon, SearchBar} from 'react-native-elements';
import Dowload from './src/component/Main/Download/download';
import Search from './src/component/Main/Search/search';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Download" component={Dowload}/>
        <Tab.Screen name="Browse" component={Browse}/>
        <Tab.Screen name="Search" component={Search}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
