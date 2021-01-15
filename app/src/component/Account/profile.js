import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AuthenticationContext } from '../../../App'
import { getAuthors } from '../../core/services/author'
import ListAuthors from '../Global/Components/ListAuthors/list-authors'

export const Profile = (props) => {  
  const authenContext = useContext(AuthenticationContext);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, [])

  return (
    <View style={{flex: 1,justifyContent: 'space-between'}}>
      <View>
        <View style={styles.userContainer}>
            <Avatar source={{uri: authenContext.authenState.userInfo.avatar}} size='large'/>
            <Text style={styles.textName}>{authenContext.authenState.userInfo.name}</Text>
            <Text>{authenContext.authenState.userInfo.phone}</Text>
            <TouchableOpacity style={styles.changePassButton} onPress={() => props.navigation.navigate("ChangePassword")}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Change Password</Text>
            </TouchableOpacity>
        </View>
      <ListAuthors title="Follow Author" authors={authors} navigation={props.navigation}/>
      </View>
        <TouchableOpacity style={styles.touch} onPress={() => authenContext.logout()}>
          <Text style={styles.textSignOut}>Sign out</Text>
        </TouchableOpacity>
    </View>  
  )
}

const styles = StyleSheet.create({
  userContainer:{
    alignItems:'center',
    margin: 20,
    justifyContent:'center',
  },
  textName:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  touch:{
    margin: 10,
    height: 30,
    backgroundColor: '#3faee0',
    borderRadius: 5,
    justifyContent: 'center'

  },
  textSignOut:{
    textAlign: 'center',
    fontSize: 17,
  }, 
  changePassButton:{
    height: 30,
    backgroundColor: '#3faee0',
    margin: 20,
    borderRadius: 5,
    padding: 5
  }
})

