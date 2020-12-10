import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'
import { UserProfileContext } from '../../../App';

export const SplashScreen = (props) => {
  const [loading, setLoading] = useState(0);
  const userProfileContext = useContext(UserProfileContext);

  useEffect(()=>{
    let timer = setInterval(()=>{
      setLoading(loading => loading + 1)
    }, 50)
    if(loading >= 100){
      clearInterval(timer);
      userProfileContext.setIsLoading(false);
    }
    return () => clearInterval(timer);
  })

  return (
    <View style={styles.container}>
      <Image style={{height:250}} source={require('../../../assets/logo.jpg')}/>
      <Text style={{textAlign:'center', color:'#3faee0', fontWeight:'bold', fontSize:30}}>Kavila</Text>
      <Text style={{margin:5, color:'#3faee0'}}>Loading.....{loading}</Text>
    </View>
)
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

