import React from 'react'  
import { View,Text,Button, StyleSheet } from 'react-native'    
import useFetch from '../hooks/useFetch'

export default ({ navigation, name })=>{
    const id = navigation.getParam("_id")
    const {loading,data} = useFetch(`https://serverless-v2.manuelp1345.vercel.app/api/meals/${id}`)

    return(
        <View style={styles.container}>
        { loading
        ?
        <Text>Carnado...</Text> 
        :
        <>
        <Text> {data._id} </Text>
        <Text> {data.name}  </Text>
        <Text> {data.desc} </Text>
        <View style={styles.btns}>
            <Button title="aceptar" onPress={()=>{
                fetch("https://serverless-v2.manuelp1345.vercel.app/api/orders/",{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        meal_id: id,
                        user_id: "lalala",

                    })
                }).then(()=>{
                    alert("Orden generada con exito")
                    navigation.navigate("Meals")
                })
            }} />
            <Text> </Text>
            <Button title="Cancelar" onPress={()=> navigation.navigate("Meals") } />
        </View>
        </>
        } 
        </View>
        
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    btns:{
        marginTop: 20,
        flexDirection:"row"
    }
})