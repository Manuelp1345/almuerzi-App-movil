import React, {useState} from 'react'  
import { View,Text,Button, StyleSheet, AsyncStorage } from 'react-native'    
import useFetch from '../hooks/useFetch'

export default ({ navigation })=>{
    const id = navigation.getParam("_id")
    const [name, setName] = useState("")
    const [userId, setId] = useState("")
    const {loading,data} = useFetch(`https://serverless-v2.manuelp1345.vercel.app/api/meals/${id}`)
    AsyncStorage.getItem("name").then(x => setName(x) )
    AsyncStorage.getItem("id").then(x => setId(x) )

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
                AsyncStorage.getItem("token")
                .then(x=>{
                    if(x){
                        fetch("https://serverless-v2.manuelp1345.vercel.app/api/auth/me",{
                            method: "GET",
                            headers:{
                                "Content-Type": "application/json",
                                authorization: x,
                            }
                        }).then(x=> x.json())
                        .then(x => {AsyncStorage.setItem("name",x.email)
                                    AsyncStorage.setItem("id",x._id)})

                        fetch("https://serverless-v2.manuelp1345.vercel.app/api/orders/",{
                            method: "POST",
                            headers:{
                                "Content-Type": "application/json",
                                authorization: x,
                            },
                            body: JSON.stringify({
                                meal_id: data._id,
                                meal_name: data.name,
                                user_name: name,
                                user_id: userId,
                            })
                        }).then((x)=>{
                            console.log(x.status)
                            if(x.status !== 201){
                                return alert("La orden no pudo ser generada")
                            }
                            alert("Orden generada con exito")
                            navigation.navigate("Meals")
                        })
                    }
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