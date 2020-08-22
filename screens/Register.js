import React from 'react'    
import { Text, TextInput,View,StyleSheet, TouchableOpacity, Alert } from 'react-native' 
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
    SubTitulo:{
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
        fetch("https://serverless-v2.manuelp1345.vercel.app/api/auth/register",{
            method: "POST",
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(values),
        })
        .then(x=>x.text())
        .then(x=> {
            if(x=== "usuario creado con exito"){
                return Alert.alert(
                    "Exito",
                    x,
                    [
                        { text: "Ir al inicio", onPress: ()=> navigation.navigate("Login")  }
                    ]
                )
            }
            Alert.alert(
                "Error",
                x,
            )
        })
    }
    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)
    return(
        <View style={styles.container} >
            <Text style={styles.Titulo} > Almuerzi App </Text>
            <Text style={styles.SubTitulo} > Registrarse </Text>
            <Text>Correo</Text>
            <TextInput style={styles.Input}
                placeholder="Correo Electronico"
                value={inputs.email.trim()}
                onChangeText={subscribe("email")}
                autoCapitalize={"none"}
                />
            <Text>Contraseña</Text>
            <TextInput style={styles.Input}
                placeholder="Contraseña"
                value={inputs.password}
                onChangeText={subscribe("password")}
                secureTextEntry={true}
                autoCapitalize={"none"}
            />
            <TouchableOpacity style={styles.btns, styles.login} backgroundColor="cyan" onPress={handleSubmit}>
            <Text>Registrarme</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity style={styles.btns} onPress={()=> {navigation.navigate("Login")}} >
                <Text>Iniciar Sesion</Text>
            </TouchableOpacity>

        </View>
    )
}