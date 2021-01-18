import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Switch } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import { LanguageContext } from '../../../App'

export const Setting = (props) => {
    const languageContext = useContext(LanguageContext);
    const language = languageContext.language;
    const [vieEnabled, setVieEnabled] = useState(language === 'vie' ? true : false);

    props.navigation.setOptions({
        title: (language === 'eng') ? 'Setting' : 'Cài đặt'
    })

    useEffect(() => {
        if(vieEnabled === true){
            languageContext.setLanguage('vie');
        }
        else{
            languageContext.setLanguage('eng');
        }
    }, [vieEnabled])

    return (
        <SafeAreaView style={styles.container}>
            {
                (language === 'eng') ? <Text style={styles.title}>Setting</Text> :<Text style={styles.title}>Cài đặt</Text>           
            }
            <View style={{flexDirection: 'row'}}>
            {(language === 'eng') ? <Text style={styles.label1}>Switch language</Text> :<Text style={styles.label1}>Chuyển ngôn ngữ</Text>} 
                <Switch
                    style={{marginTop: 10, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]}}
                    trackColor={{false: 'gray', true: '#3faee0'}}
                    onValueChange={() => setVieEnabled(isEnable => !isEnable)}
                    value={vieEnabled}
                />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
      },
      label1:{
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
      },
})