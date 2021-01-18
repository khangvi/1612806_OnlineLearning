import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { TextInput } from 'react-native'
import { Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native'
import { LanguageContext } from '../../../App'
import { updateProfile } from '../../core/services/user-service'

export const ChangeProfile = (props) => {
    const user = props.route.params.user
    const token = props.route.params.token
    const reload = props.route.params.reload
    const [fullName, setFullName] = useState(user.name);
    const [phoneNum, setPhoneNum] = useState(user.phone);
    const [message, setMessage] = useState('');
    const languageContext = useContext(LanguageContext);
    const language = languageContext.language;

    props.navigation.setOptions({
        title: (language === 'eng') ? 'Change Profile' : 'Cập nhật thông tin'
    })

    const onSubmit = () => {
        if(fullName === '' || phoneNum === ''){
            if(language === 'eng'){
                setMessage('Full name and Phone number must not be empty!')
            }
            else{
                setMessage('Không được bỏ trống các ô thông tin!')
            }
        }
        else if(fullName === user.name && phoneNum === user.phone){
            props.navigation.goBack();
        }
        else{
            updateProfile(fullName, user.avatar, phoneNum, token).then((res) =>props.route.params.setReload(reload + 1))
            if(language === 'eng'){
                Alert.alert('Profile updated!!')
            }
            else{
                Alert.alert('Cập nhật thành công!!')
            }
        }
    }

    return (
        <SafeAreaView>
            {(language === 'eng') ? <Text style={styles.title}>Update Profile</Text>: <Text style={styles.title}>Cập nhật thông tin</Text>}
            <TextInput
                        style={styles.input}
                        defaultValue={user.name}
                        onChangeText={(txt) => setFullName(txt)}
            />
            <TextInput
                        style={styles.input}
                        defaultValue={user.phone}
                        onChangeText={(txt) => setPhoneNum(txt)}
            />
            <Text style={{marginLeft: 20, color: 'red'}}>{message}</Text>
            <TouchableOpacity style={styles.touch} onPress={onSubmit}>
                {(language === 'eng') ? <Text style={styles.textButton}>Change</Text> :
                <Text style={styles.textButton}>Cập nhật</Text>}
            </TouchableOpacity>  
        </SafeAreaView>
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