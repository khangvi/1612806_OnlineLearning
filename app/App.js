import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../app/src/component/Main/Home/home";
import Browse from './src/component/Main/Browse/browse';
import {Icon} from 'react-native-elements';
import Dowload from './src/component/Main/Download/download';
import Search from './src/component/Main/Search/search';
import ListCourses from './src/component/Global/Components/ListCourses/list-courses';

const Tab = createBottomTabNavigator();
const screenStack = createStackNavigator();

export default function App() {
  const browseStack = () => {
    return (
        <screenStack.Navigator initialRouteName={"Download"} mode={'modal'}>
            <screenStack.Screen name={"Browse"} component={Browse}/>
            <screenStack.Screen name={"CourseList"} component={ListCourses}/>
        </screenStack.Navigator>
    );
};

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
        <Tab.Screen name="Browse" component={browseStack}/>
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
