import React, { useState } from 'react'    
import { Text, TextInput,View,StyleSheet, TouchableOpacity, Alert, AsyncStorage, ActivityIndicator } from 'react-native' 
import useForm from '../hooks/useForm'
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:15
    },
    Input:{
        height:40,
        borderColor:"#bbb",
        borderWidth:1,
        alignSelf:"stretch",
        margin: 10,
        paddingHorizontal:10,
        borderRadius:5,
    },
    btns:{
        borderColor:"transparent",
        borderWidth:2,
        alignSelf:"stretch",
        alignItems:"center",
        marginHorizontal:55,
        padding:5,
        borderRadius:5,
        backgroundColor:"#ccc"
    },
    login:{
        borderColor:"#ddd",
        borderWidth:1,
        alignSelf:"stretch",
        alignItems:"center",
        marginHorizontal:40,
        padding:5,
        borderRadius:5,
        backgroundColor:"cyan"
    },
    Titulo:{
        fontSize:35,
        fontWeight:"bold",
        marginBottom:25,
        marginTop: -50
    },
    TitSubTituloulo:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:25
    },
})

export default ({navigation})=>{
    const initialState = {
        email:"",
        password: "",
    }
    const onSubmit = values =>{
        setLoading(true)
        fetch("https://serverless-v2.manuelp1345.vercel.app/api/auth/login",{
            method: "POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(values),
        })
        .then(x=>x.text())
        .then(x=>{
            try{
                return JSON.parse(x)
            }catch{
                throw x
            }
        })
        .then(x => {
            AsyncStorage.setItem("token", x.token)
            navigation.navigate("Meals")
        })
        .catch(e => Alert.alert("Error",e))

    }
    const [loading,setLoading] = useState(false)

    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
    return(
        <View style={styles.container} >
            <Text style={styles.Titulo} > Almuerzi App </Text>
            <Text style={styles.TitSubTituloulo} > Iniciar Sesion </Text>
            <ActivityIndicator size="large" color="cyan" animating={loading} />
            <Text>Correo</Text>
            <TextInput style={styles.Input}
                placeholder="Correo Electronico"
                value={ inputs.email.trim() }
                onChangeText={subscribe("email")}
                autoCapitalize={"none"}

                />
            <Text>Contraseña</Text>
            <TextInput style={styles.Input}
                placeholder="Contraseña"
                value={ inputs.password}
                onChangeText={subscribe("password")}
                secureTextEntry={true}
                autoCapitalize={"none"}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.btns, styles.login} backgroundColor="cyan" >
            <Text>Ingresar</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity style={styles.btns} onPress={()=> {navigation.navigate("Register")}} >
                <Text>Registrarse</Text>
            </TouchableOpacity>
        </View>
    )
}