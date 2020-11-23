import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

const Login = (pros) => {
    return <View style={{flex: 1, marginTop: 24, backgroundColor: 'black'}}>
        <View style={styles.header}>
            <Text style = {{margin: 18, color:'white', fontSize: 18, fontWeight: 'bold',}}>Sign in</Text>
        </View>

        <View style = {styles.login}>
            <TextInput
            style = {styles.input}
            placeholder = 'Username'
            placeholderTextColor = 'gray'>                
            </TextInput>
            <TextInput
            style = {styles.input}
            placeholder = 'Password'
            placeholderTextColor = 'gray'>
            </TextInput>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>Sign in</Text>
            </TouchableOpacity>
        </View>
    </View>
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#1d2329',
        borderRadius: 5,
    },

    login:{
        marginTop: 40,
        marginHorizontal: 10

    },

    input:{
        backgroundColor: '#1d2329',
        height: 60,
        marginBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        borderRadius: 5,

    },
    touch:{
        marginTop: 20,
        height: 40,
        backgroundColor: '#1f2226',
        borderRadius: 5,

    },
    text:{
        margin: 8,
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Login;

