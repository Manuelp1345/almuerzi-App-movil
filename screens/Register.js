import React from 'react'    
import { Text, TextInput,View,StyleSheet, TouchableOpacity } from 'react-native' 
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
    return(
        <View style={styles.container} >
            <Text style={styles.Titulo} > Almuerzi App </Text>
            <Text style={styles.SubTitulo} > Registrarse </Text>
            <Text>Correo</Text>
            <TextInput style={styles.Input}
                placeholder="Correo Electronico"
                />
            <Text>Contraseña</Text>
            <TextInput style={styles.Input}
                placeholder="Contraseña"
            />
            <TouchableOpacity style={styles.btns, styles.login} backgroundColor="cyan" onPress={()=> {}} >
            <Text>Registrarme</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity style={styles.btns} onPress={()=> {navigation.navigate("Login")}} >
                <Text>Iniciar Sesion</Text>
            </TouchableOpacity>

        </View>
    )
}