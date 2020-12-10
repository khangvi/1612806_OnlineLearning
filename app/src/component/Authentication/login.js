import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { UserProfileContext } from '../../../App';
import { getUserInfo, login } from '../../core/services/authen-service';

const Login = (props) => {
  const userProfileContext = useContext(UserProfileContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status && status.status === 200){
        userProfileContext.setUserProfile(getUserInfo(username));
        userProfileContext.setIsSignedIn(true);
    }
}, [status])

  const renderLoginStatus = (status) => {
    if (!status){
      return <View/>
    }
    else if (status.status === 404) {
      return <Text style={{color: 'red'}}>{status.errorString}</Text>
    }
}
  return (
  <View style={{flex: 1, marginTop: 24, backgroundColor: 'white'}}>
    <Image style={{height:250}} source={require('../../../assets/logo.jpg')}/>
    <Text style={{textAlign:'center', color:'#3faee0', fontWeight:'bold', fontSize:30}}>Kavila</Text>
    <View style = {styles.login}>
      <TextInput
      style = {styles.input}
      placeholder = 'Username'
      placeholderTextColor = 'gray'
      onChangeText={username => setUsername(username)}
      defaultValue={username} >            
      </TextInput>
      <TextInput
      style = {styles.input}
      placeholder = 'Password'
      placeholderTextColor = 'gray'
      onChangeText={password => setPassword(password)}
      defaultValue={password}
      secureTextEntry>
      </TextInput>
      {renderLoginStatus(status)}
      <TouchableOpacity style={styles.touch} onPress={() => setStatus(login(username, password))}>
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
  login:{
    marginTop: 40,
    marginHorizontal: 10

  },

  input:{
    backgroundColor: 'white',
    height: 60,
    marginBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    borderRadius: 5,
    borderWidth:1,
    padding:10
  },
  touch:{
    marginTop: 20,
    height: 40,
    backgroundColor: '#3faee0',
    borderRadius: 5,

  },
  text:{
    margin: 8,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Login;

