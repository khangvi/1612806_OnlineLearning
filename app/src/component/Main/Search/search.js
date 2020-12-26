import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {View, StyleSheet, TextInput, FlatList, TouchableOpacity, Text, ScrollView} from 'react-native'
import { Icon, SearchBar } from 'react-native-elements';
import { AuthenticationContext } from '../../../../App';
import { getSearchHistory, getSearchResult } from '../../../core/services/search-service';
import ListCourses from '../../Global/Components/ListCourses/list-courses';

const Search = (props) => {
  const [searchString, setSearchString] = useState('');
  const [searchHistory, setSearchHisory] = useState(getSearchHistory());
  const [searchResult, setSearchResult] = useState([]);
  const authenContext=useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    if(searchString === ''){
      setIsLoading(true);
    }
  })

  useEffect(() => {
    if(searchString !== ''){
      getSearchResult(searchString, authenContext.authenState.token).then((res) => {
        setSearchResult(res);
        setIsLoading(false);
      })
    }
  }, [searchString])

  const renderSearchResul = () => {
    if (isLoading === true) {
      return (<FlatList
        data={searchHistory}
        renderItem={({item}) =>
                          (<TouchableOpacity style={styles.touch} onPress={() => setSearchString(`${item}`)}>
                              <Icon name={'cached'} type={'material-icons'} />
                              <Text style={styles.textRecentSeach}>{item}</Text>
                          </TouchableOpacity>)}
    />)
  } else{
      return (
          <ScrollView>
              <Text style={{margin: 5}}>{searchResult.courses.total} result</Text>
              <ListCourses title={''} courses={searchResult.courses.data} navigation={props.navigation}/>
          </ScrollView>
      );
  }
}
  return (
    <View style={styles.container}>
      <SearchBar placeholder={'Search...'}
                 onChangeText={(text) => setSearchString(text)}
                 value={searchString}
                 onEndEditing={() => searchHistory.push(searchString)}
                 />
      {renderSearchResul()}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50
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

