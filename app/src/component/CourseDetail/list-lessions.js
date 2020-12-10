import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native'

const RenderContentList = ({item}) =>{
  return(
  <View style={styles.container}>
    <View style={styles.contentLession}>
      <View style={styles.square}>
        <Text>{item.id}</Text>
      </View>
      <View style={styles.contentInfo}>
        <Text style={{fontWeight:'bold', marginBottom: 5}}>{item.name}</Text>
        <Text style={{fontSize:12}}>{item.totalTime}</Text>
      </View>
    </View>
    <View style={styles.contentList}>
      {item.listContent.map((content) => 
        <TouchableOpacity style={styles.touchContent}>
          <Image source={require('../../../assets/point-icon.png')} style={styles.icon}/>
          <View style={{flex: 1,flexDirection:'row'}}>
          <Text style={{flex:15, fontSize:11, fontWeight:'bold'}}>{content.name}</Text>
          <Text style={{flex:1, fontSize:11, color:'gray'}}>{content.time}</Text>
          </View>    
        </TouchableOpacity>)
      }
    </View>
  </View>
  )
}


export const ListLessions = ({lessions}) => {
  return (
    <View style={{flex:1}}>
        {/* <FlatList
          data={lessions}
          renderItem={({item}) => 
             <View style={styles.container}>
               <View style={styles.contentLession}>
                 <View style={styles.square}>
                   <Text>{item.id}</Text>
                 </View>
                 <View style={styles.contentInfo}>
                   <Text style={{fontWeight:'bold', marginBottom: 5}}>{item.name}</Text>
                   <Text style={{fontSize:12}}>{item.totalTime}</Text>
                 </View>
               </View>
               <View style={styles.contentList}>
                {item.listContent.map((content) => 
                  <TouchableOpacity style={styles.touchContent}>
                    <Image source={require('../../../assets/point-icon.png')} style={styles.icon}/>
                    <View style={{flex: 1,flexDirection:'row'}}>
                    <Text style={{flex:15, fontSize:11, fontWeight:'bold'}}>{content.name}</Text>
                    <Text style={{flex:1, fontSize:11, color:'gray'}}>{content.time}</Text>
                    </View>    
                  </TouchableOpacity>)
                }
               </View>
             </View>
          }
        >
        </FlatList> */}
        <ScrollView
        nestedScrollEnabled
        >
          {
            lessions.map((item) => <RenderContentList item={item}/>)
          }
        </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
      marginTop: 10,
    },
    contentLession:{
      flexDirection:'row',
      height:50,
    },
    square:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width:50,
      backgroundColor:'lightgray',
      margin:5,
    },
    contentInfo:{
      margin: 5,
    },
    contentList:{
      marginTop:20,
    },
    touchContent:{
      flexDirection:'row',
      margin:5,
    },
    icon:{
      height:15,
      width:15,
    }

})

