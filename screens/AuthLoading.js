import React, {useEffect} from 'react'
import {ActivityIndicator, AsyncStorage,View ,StyleSheet} from 'react-native' 

export default ({navigation})=>{
    useEffect(()=>{
        AsyncStorage.getItem("token")
        .then(x=>{
            navigation.navigate(x?"Root":"Onboarding")
        })
    },[])
    return (
        <View>
            <ActivityIndicator
            
            />
        </View>
    )
}