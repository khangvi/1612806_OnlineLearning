import React from 'react'
import { useState } from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput, ScrollView } from 'react-native';
import { registerAPI, sendActivateEmail } from '../../core/services/account-service';

export const Register = (props) => {
  const [inputState, setInputState] = useState({username: '', email: '', password: '', confirmPassword: '', phoneNumber: ''});
  const [isSuccessState, setIsSuccessState] = useState(false);
  const [message, setMessage] = useState('');

  const PressButton = () =>{
    registerAPI(inputState).then((res) => {
      setIsSuccessState(res.isSuccess);
      setMessage(res.message);
      if(res.isSuccess){
        sendActivateEmail(inputState.email)
      }
    })
  }

  const renderRegisterView = () => {
    if(isSuccessState){
      return(
          <Text style={styles.textSuccsess}>
            Create new account successful!!{'\n \n'}
            We have sent you an email, please check to active your account!
          </Text>
      )
    }
    else {
      return(
      <View>
          <TextInput style={styles.input}
                      placeholder='Username'
                      placeholderTextColor='gray'
                      onChangeText={(username) => setInputState({...inputState, username: username})}
                      defaultValue={inputState.username}>
          </TextInput>
          <TextInput style={styles.input}
                      placeholder='Email'
                      placeholderTextColor='gray'
                      onChangeText={(email) => setInputState({...inputState, email: email})}
                      defaultValue={inputState.email}>
          </TextInput>
          <TextInput style={styles.input}
                      placeholder='Password'
                      placeholderTextColor='gray'
                      onChangeText={(password) => setInputState({...inputState, password: password})}
                      defaultValue={inputState.password}
                      secureTextEntry={true}>
          </TextInput>
          <TextInput style={styles.input}
                      placeholder='Corfirm password'
                      placeholderTextColor='gray'
                      onChangeText={(confirmPassword) => setInputState({...inputState, confirmPassword: confirmPassword})}
                      defaultValue={inputState.confirmPassword}
                      secureTextEntry={true}>
          </TextInput>
          <TextInput style={styles.input}
                      placeholder='Phone number'
                      placeholderTextColor='gray'
                      onChangeText={(phoneNumber) => setInputState({...inputState, phoneNumber: phoneNumber})}
                      defaultValue={inputState.phoneNumber}>
          </TextInput>
          <Text style={{color: 'red', fontSize: 14, marginLeft: 20}}>{message}</Text>

          <TouchableOpacity style={styles.touch} onPress={PressButton}>
            <Text style={styles.textButton}>Create account</Text>
          </TouchableOpacity>
      </View>
      )
    }
  }

  return (
    <KeyboardAvoidingView behavior={'height'}>
      <ScrollView style={{marginTop: 50}}>
        <Image style={{height:250}} source={require('../../../assets/logo.jpg')}/>
        <Text style={styles.title}>Register</Text>
        {renderRegisterView()}
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  input:{
    margin: 20,
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
    margin: 20,
    height: 40,
    backgroundColor: '#3faee0',
    borderRadius: 5,
  },
  textButton:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    color: 'white'
  },
  title:{
    fontSize: 30,
    color: 'black',
    textAlign:'center'
  },
  textSuccsess:{
    fontSize: 16,
    color: '#3faee0',
    margin: 30,
    marginTop: 30
  }
})