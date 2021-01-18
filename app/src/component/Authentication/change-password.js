import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import { AuthenticationContext, LanguageContext } from '../../../App'
import axios from 'axios'

export const ChangePassword = (props) => {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [message, setMessage] = useState('');
    const authenContext = useContext(AuthenticationContext);
    const languageContext = useContext(LanguageContext);
    const language = languageContext.language;

    props.navigation.setOptions({
        title: (language === 'eng') ? 'Change password' : 'Đổi mật khẩu'
    })

    const changePassPress = () =>{
        const validPassword = (/^.{8,20}$/).test(newPass);
        if(validPassword===false){
            if(language === 'eng'){
                setMessage('New password must have 8 - 20 characters!');
            }
            else{
                setMessage('Mật khẩu mới phải có 8 - 20 ký tự!');
            }
        }
        else if(newPass !== confirmPass){
            if(language === 'eng'){
                setMessage('New password and corfirm password do not match!')
            }
            else{
                setMessage('Mật khẩu mới và mật khẩu xác nhận phải giống nhau!')
            }
        } else {
            axios.post('http://api.dev.letstudy.org/user/change-password', {
                id: authenContext.authenState.userInfo.id,
                oldPass: oldPass,
                newPass: newPass
            }, {headers: {Authorization: `Bearer ${authenContext.authenState.token}`}})
            .then((res) => {
                if(language === 'eng'){
                    setMessage('Change password successfully!')
                }
                else{
                    setMessage('Đổi mật khẩu thành công!')
                }
                })
            .catch((error) => {
                if(language === 'eng'){
                    setMessage('Incorrect old pass, please try again!')
                }
                else{
                    setMessage('Mật khẩu hiện tại sai, vui lòng thử lại!')
                }
                })
        }
    }

    return  (
        <ScrollView>
            {(language === 'eng') ? <Text style={styles.title}>Change Password</Text> : <Text style={styles.title}>Đổi mật khẩu</Text>}
            <TextInput style={styles.input}
                       placeholder={(language === 'eng') ? "Old password" : "Mật khẩu hiện tại"}
                       placeholderTextColor="gray"
                       onChangeText={(txt) => setOldPass(txt)}
                       defaultValue={oldPass}
                       secureTextEntry={true}
                       />
            <TextInput style={styles.input}
                       placeholder={(language === 'eng') ? "New password" : "Mật khẩu mới"}
                       placeholderTextColor="gray"
                       onChangeText={(txt) => setNewPass(txt)}
                       defaultValue={newPass}
                       secureTextEntry={true}
                       />
            <TextInput style={styles.input}
                       placeholder={(language === 'eng') ? "Confirm password" : "Mật khẩu xác nhận"}
                       placeholderTextColor="gray"
                       onChangeText={(txt) => setConfirmPass(txt)}
                       defaultValue={confirmPass}
                       secureTextEntry={true}
                       />
            <Text style={{color: 'red', marginLeft: 20}}>{message}</Text>           
            <TouchableOpacity style={styles.touch} onPress={changePassPress}>
                {(language === 'eng') ? <Text style={styles.textButton}>Change</Text> :<Text style={styles.textButton}>Thay đổi</Text>}
            </TouchableOpacity>                      
        </ScrollView>
    )
}

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
      title:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
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
})