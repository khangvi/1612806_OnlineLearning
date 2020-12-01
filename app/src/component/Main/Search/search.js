import React, { useState } from 'react';
import {View, StyleSheet, TextInput, FlatList, TouchableOpacity, Text, ScrollView} from 'react-native'
import { Icon, SearchBar } from 'react-native-elements';
import { getSearchHistory, getSearchResult } from '../../../core/services/search-service';
import ListCourses from '../../Global/Components/ListCourses/list-courses';

const Search = (props) => {
  const [searchString, setSearchString] = useState('');
  const [searchHistory, setSearchHisory] = useState(getSearchHistory);

const renderSearchResul = () => {
  if (searchString === '') {
    return (<FlatList 
      data={searchHistory}
      renderItem={({item}) =>
                          (<TouchableOpacity style={styles.touch} onPress={() => setSearchString(`${item}`)}>
                              <Icon name={'cached'} type={'material-icons'} />
                              <Text style={styles.textRecentSeach}>{item}</Text>
                          </TouchableOpacity>)}
    />)
  } else {
      const resultCourses = getSearchResult(searchString);
      return (
          <ScrollView>
              <ListCourses title={'Courses'} courses={resultCourses} navigation={props.navigation}/>
          </ScrollView>
      );
  }
}
  return (
    <View style={styles.container}>
      <SearchBar placeholder={'Search...'}
                 onChangeText={(text) => setSearchString(text)}
                 value={searchString}
                 onEndEditing={() => searchHistory.push(searchString)}/>
      {renderSearchResul()}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24
  },
  touch:{
    flexDirection: 'row',
    margin:5
  },
  textRecentSeach:{
    marginLeft: 10
  }
})

export default Search;

