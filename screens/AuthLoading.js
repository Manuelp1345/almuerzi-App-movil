import React, {useEffect} from 'react'
import {ActivityIndicator, AsyncStorage,Text ,StyleSheet} from 'react-native' 

export default ({navigation})=>{
    useEffect(()=>{
        AsyncStorage.getItem("token")
        .then(x=>{
            navigation.navigate(x?"Root":"Onboarding")
        })
    },[])
    return (
        <>
        <Text style={styles.Text} >Cargando...</Text>
        <ActivityIndicator size="large" color="cyan"/>
        </>
    )
}
const styles = StyleSheet.create ({
    Text:{
        flex:2,
        fontSize:30,
    }
})