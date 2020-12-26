import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import { AuthenticationContext, UserProfileContext } from '../../../App';

const Login = (props) => {
  const userProfileContext = useContext(UserProfileContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenContext = useContext(AuthenticationContext);

  useEffect(() => {
    if (authenContext.authenState.isAuthenticated){
        userProfileContext.setUserProfile(authenContext.authenState.userInfo);
    }
}, [authenContext.authenState])

  const renderLoginStatus = (message) => {
    if ((message === '')){
      return <View/>
    }
    else {
      return <Text style={{color: 'red'}}>{message}</Text>
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
        {renderLoginStatus(authenContext.authenState.message)}
        <TouchableOpacity style={styles.touch} onPress={() => authenContext.login(username, password)}>
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => props.navigation.navigate("Register")}>
          <Text style={styles.textTouch}>Create new account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => props.navigation.navigate("ForgotPassword")}>
          <Text style={styles.textTouch}>Forget password?</Text>
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
  textTouch:{
    margin: 10,
    height: 20,
    color: '#3faee0',
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Login;

