import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import { AuthenticationContext } from '../../../App'
import axios from 'axios'

export const ChangePassword = (props) => {
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [message, setMessage] = useState('');
    const authenContext = useContext(AuthenticationContext);

    const changePassPress = () =>{
        const validPassword = (/^.{8,20}$/).test(newPass);
        if(validPassword===false){
            setMessage('New password must have 8 - 20 characters');
        }
        else if(newPass !== confirmPass){
            setMessage('New password and corfirm password do not match')
        } else {
            axios.post('http://api.dev.letstudy.org/user/change-password', {
                id: authenContext.authenState.userInfo.id,
                oldPass: oldPass,
                newPass: newPass
            }, {headers: {Authorization: `Bearer ${authenContext.authenState.token}`}})
            .then((res) => setMessage('Change password successfully!'))
            .catch((error) => setMessage('Incorrect old pass, please try again!'))
        }
    }

    return  (
        <ScrollView>
            <Text style={styles.title}>Change Password</Text>
            <TextInput style={styles.input}
                       placeholder="Old password"
                       placeholderTextColor="gray"
                       onChangeText={(txt) => setOldPass(txt)}
                       defaultValue={oldPass}
                       secureTextEntry={true}
                       />
            <TextInput style={styles.input}
                       placeholder="New password"
                       placeholderTextColor="gray"
                       onChangeText={(txt) => setNewPass(txt)}
                       defaultValue={newPass}
                       secureTextEntry={true}
                       />
            <TextInput style={styles.input}
                       placeholder="Confirm password"
                       placeholderTextColor="gray"
                       onChangeText={(txt) => setConfirmPass(txt)}
                       defaultValue={confirmPass}
                       secureTextEntry={true}
                       />
            <Text style={{color: 'red', marginLeft: 20}}>{message}</Text>           
            <TouchableOpacity style={styles.touch} onPress={changePassPress}>
                <Text style={styles.textButton}>Change</Text>
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