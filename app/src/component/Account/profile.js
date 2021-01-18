import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AuthenticationContext, LanguageContext } from '../../../App'
import { getAuthors } from '../../core/services/author'
import ListAuthors from '../Global/Components/ListAuthors/list-authors'

export const Profile = (props) => {  
  const authenContext = useContext(AuthenticationContext);
  const languageContext = useContext(LanguageContext);
  const [authors, setAuthors] = useState([]);
  const [reload, setReload] = useState(0);
  const [user, setUser] = useState(null);
  const language = languageContext.language;
  
  props.navigation.setOptions({
    title: (language === 'eng') ? 'Profile' : 'Thông tin tài khoản'
  })

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, [])

  useEffect(() => {
    axios.get('http://api.dev.letstudy.org/user/me',{
      headers: {Authorization: `Bearer ${authenContext.authenState.token}`}
    }).then((res) => setUser(res.data.payload))
  }, [reload])

  if(user !== null){
    return (
      <View style={{flex: 1,justifyContent: 'space-between'}}>
        <View>
          <View style={styles.userContainer}>
              <Avatar source={{uri: user.avatar}} size='large'/>
              <Text style={styles.textName}>{user.name}</Text>
              <Text>{user.phone}</Text>
              <TouchableOpacity style={styles.changePassButton} onPress={() => props.navigation.navigate("ChangeProfile", {user: user, reload:reload, setReload:setReload, token: authenContext.authenState.token})}>
                {(language === 'eng') ? <Text style={{fontWeight: 'bold', color: 'black'}}>Change Profile</Text> : <Text style={{fontWeight: 'bold', color: 'black'}}>Cập nhật thông tin</Text>}
              </TouchableOpacity>
              <TouchableOpacity style={styles.changePassButton} onPress={() => props.navigation.navigate("ChangePassword")}>
              {(language === 'eng') ? <Text style={{fontWeight: 'bold', color: 'black'}}>Change Password</Text> : <Text style={{fontWeight: 'bold', color: 'black'}}>Đổi mật khẩu</Text>}
              </TouchableOpacity>
          </View>
        <ListAuthors title={(language === 'eng') ? "Follow Author" : "Tác giả theo dõi"} authors={authors} navigation={props.navigation}/>
        </View>
          <TouchableOpacity style={styles.touch} onPress={() => authenContext.logout()}>
            {(language === 'eng') ? <Text style={styles.textSignOut}>Sign out</Text> : <Text style={styles.textSignOut}>Đăng xuất</Text>}
          </TouchableOpacity>
      </View>  
    )
  }
  else{
    return (
      <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}/>
    )
  }
  
}

const styles = StyleSheet.create({
  userContainer:{
    alignItems:'center',
    margin: 20.,
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
    justifyContent: 'center',
    padding:10

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
    padding: 7
  }
})

