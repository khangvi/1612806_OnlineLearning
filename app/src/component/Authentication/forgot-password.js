import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Image } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { LanguageContext } from '../../../App'
import { forgotPasswordAPI } from '../../core/services/account-service'


export const ForgotPassword = (props) =>{    
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSucess] = useState(false);
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language;

  const PressButton = () =>{
    forgotPasswordAPI(email).then((res) => {
      setIsSucess(res.isSuccess);
      setMessage(res.message)
    })
  }

  const renderView = () => {
    if(isSuccess){
      return (
        <Text style={styles.textSuccsess}>
          We have already sent you an email to reset password.{'\n\n'}Please check it out!!
        </Text>
      )
    }
    else{
      return (
        <View style={{marginTop: 50}}>
          <Text style={{marginLeft: 20, marginBottom: 20, color: 'red'}}>{message}</Text>
          {(language === 'eng') ? <Text style={{marginLeft: 20}}>Please enter your email to reset password!!</Text> : <Text style={{marginLeft: 20}}>Vui lòng điền email của bạn để thiết lập mật khẩu!!</Text>}
          
          <TextInput style={styles.input}
                      placeholder={(language === 'eng') ? "Enter email" : "Nhập email"}
                      placeholderTextColor="gray"
                      onChangeText={(text) => setEmail(text)}
                      defaultValue={email}>         
          </TextInput>
          <TouchableOpacity style={styles.touch} onPress={PressButton}>
          {(language === 'eng') ? <Text style={styles.textButton}>Send</Text> :<Text style={styles.textButton}>Gửi đi</Text>} 
          </TouchableOpacity>
        </View>
      )
    }
  }
  
  return (
    <ScrollView style={{marginTop: 50}}>
        <Image style={{height:250}} source={require('../../../assets/logo.jpg')}/>
        {(language === 'eng') ? <Text style={styles.title}>Reset Password</Text> :<Text style={styles.title}>Lấy lại mật khẩu</Text>}
        {renderView()}
      </ScrollView>
  )
    
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
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
  textSuccsess:{
    fontSize: 16,
    color: '#3faee0',
    margin: 30,
    marginTop: 30
  }
})