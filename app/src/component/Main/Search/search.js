import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import {View, StyleSheet, TextInput, FlatList, TouchableOpacity, Text, ScrollView} from 'react-native'
import { Icon, SearchBar } from 'react-native-elements';
import { AuthenticationContext } from '../../../../App';
import { deleteHistory, getSearchHistory, getSearchResult } from '../../../core/services/search-service';
import ListCourses from '../../Global/Components/ListCourses/list-courses';

const Search = (props) => {
  const [searchString, setSearchString] = useState('');
  const [searchHistory, setSearchHisory] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const authenContext=useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState('');
  const [searching, setSearching] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect (() =>{
    getSearchHistory(authenContext.authenState.token).then(setSearchHisory);
  },[reload])

  useEffect(() =>{
    if(content === ''){
      setIsLoading(true);
      setSearchString('');
      setSearching(false);
    }
  }, [content])

  useEffect(() => {
    if(searchString !== ''){
      getSearchResult(searchString, authenContext.authenState.token).then((res) => {
        setSearchResult(res);
        setIsLoading(false);
        setReload(reload + 1);
      })
    }
  }, [searchString])

  const enterSearch = () =>{
    if(content !== ''){
      setSearchString(content);
      setSearching(true);
    }
  }
  
   const deleteHistoryById = (id) =>{
     deleteHistory(id, authenContext.authenState.token).then((res) => setReload(reload + 1))
   }

   const deleteAllHistory = () => {
     searchHistory.forEach(item => {
       deleteHistory(item.id, authenContext.authenState.token)
      })
     setReload(reload + 1);
   }

  const renderSearchResul = () => {
    if (searching === false) {
      return (
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{margin: 5, fontWeight: 'bold', fontSize: 17}}>Recent searches</Text>
            <TouchableOpacity style={{margin: 5}} >
              <Text style={{color: 'red', fontSize: 17}} onPress={() => deleteAllHistory()}>CLEAR ALL</Text>
            </TouchableOpacity>
          </View>
          {searchHistory.map(item => 
            (<TouchableOpacity style={styles.touch} onPress={() => setContent(`${item.content}`)}>
              <View style={{flexDirection: 'row'}}>
                <Icon name={'cached'} type={'material-icons'} />
                <Text style={styles.textRecentSeach}>{item.content}</Text>
              </View>
              <TouchableOpacity>
                <Icon name={'clear'} type={'material-icons'} onPress={() => deleteHistoryById(item.id)}/>
              </TouchableOpacity>
            </TouchableOpacity>))}
        </ScrollView>
      )
  } else{
      if(!isLoading){
        return (
          <ScrollView>
              <Text style={{margin: 5}}>{searchResult.courses.total} result</Text>
              <ListCourses title={''} courses={searchResult.courses.data} navigation={props.navigation}/>
          </ScrollView>
        )
      }
      else{
        return (
          <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignContent: 'center', marginTop: 50}}/>
        )
    }
  }
}
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
      <SearchBar placeholder={'Search...'}
                 onChangeText={(text) => setContent(text)}
                 value={content}
                 onSubmitEditing={enterSearch}
                 />
      {renderSearchResul()}
    </View>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  touch:{
    flexDirection: 'row',
    margin:5,
    justifyContent: 'space-between'
  },
  textRecentSeach:{
    marginLeft: 10
  }
})

export default Search;

