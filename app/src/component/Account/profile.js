import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { UserProfileContext } from '../../../App'
import ListAuthors from '../Global/Components/ListAuthors/list-authors'

export const Profile = (props) => {  
  const userProfileContext = useContext(UserProfileContext);
  //const [isSignedOut, setIsSignedOut] = useState(false);
  const authors=[
    {
        name: 'Deborah Kuata',
        image:{uri:'https://i.imgur.com/fuP5jM4.jpg'}
    },
    {
        name: 'Scott Allen',
        image:{uri:'https://i.imgur.com/VxUkY4P.png'}
    },
    {
        name: 'Joe Eames',
        image:{uri:'https://i.imgur.com/88ZiPwh.jpg'}
    },
    {
        name: 'Jim Cooper',
        image:{uri:'https://i.imgur.com/rr6Nujc.jpg'}
    },
  ]

  let user=props.route.params.user
  // useEffect(()=>{
  //   if(isSignedOut===true){
  //     userProfileContext.setIsSignedIn(false);
  //   }
  // })
  return (
    <View style={{flex: 1,justifyContent: 'space-between'}}>
      <View>
        <View style={styles.userContainer}>
            <Avatar source={user.avatar} size='large'/>
            <Text style={styles.textName}>{user.fullname}</Text>
            <Text>{user.subscription}</Text>
        </View>
      <ListAuthors title="Follow Author" authors={authors} navigation={props.navigation}/>
      </View>
        <TouchableOpacity style={styles.touch} onPress={() => userProfileContext.setIsSignedIn(false)}>
          <Text style={styles.textSignOut}>Sign out</Text>
        </TouchableOpacity>
    </View>  
  )
}

const styles = StyleSheet.create({
  userContainer:{
    alignItems:'center',
    margin: 20,
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
    justifyContent: 'center'

  },
  textSignOut:{
    textAlign: 'center',
    fontSize: 17,
  }, 
  changeThemeButton:{
    margin: 10,
    height: 30,
    width: 150, 
    backgroundColor: '#3faee0',
    borderRadius: 5,
    justifyContent:'center'
  }
})

