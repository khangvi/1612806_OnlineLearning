import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../app/src/component/Main/Home/home";
import Browse from './src/component/Main/Browse/browse';
import {Icon} from 'react-native-elements';
import Dowload, {Download} from './src/component/Main/Download/download';
import Search from './src/component/Main/Search/search';
import ListCourses from './src/component/Global/Components/ListCourses/list-courses';
import {CourseDetail} from "./src/component/CourseDetail/course-detail";
import { AuthorDetail } from './src/component/AuthorDetail/author-detail';
import { PathDetail } from './src/component/PathDetail/path-detail';

const Tab = createBottomTabNavigator();
const screenStack = createStackNavigator();

export default function App() {
  const browseStack = () => {
    return (
        <screenStack.Navigator initialRouteName={"Download"} mode={'modal'}>
            <screenStack.Screen name={"Browse"} component={Browse}/>
            <screenStack.Screen name={"CourseList"} component={ListCourses}/>
            <screenStack.Screen name={"AuthorDetail"} component={AuthorDetail}/>
            <screenStack.Screen name={"CourseDetail"} component={CourseDetail}/>
            <screenStack.Screen name={"PathDetail"} component={PathDetail}/>

        </screenStack.Navigator>
    );
};

  const homeStack = () => {
    return (
        <screenStack.Navigator initialRouteName={"Home"} mode={'modal'}>
            <screenStack.Screen name={"Home"} component={Home}/>
            <screenStack.Screen name={"CourseDetail"} component={CourseDetail}
            />
        </screenStack.Navigator>
    );
};

  const data={
      id: 1,
      title: 'React',
      author: 'Hai Pham',
      level: 'Intermediate',
      released: 'Nov 2020',
      duration: '40 hours'
  }

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
        <Tab.Screen name="Home" component={homeStack}/>
        <Tab.Screen name="Download" component={Download}/>
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
