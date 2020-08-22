import React from 'react'  
import { View,StyleSheet, AsyncStorage} from 'react-native'    
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Login from './Login';

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"flex-start",
        justifyContent: "flex-start"
    },
})

const exit = ({ navigation })=>{
    AsyncStorage.removeItem("token")
    return(

        <View style={styles.container} > 
        </View>
    )
}

exit.navigationOptions=({
    title: "Cerrar Sesion",
    drawerIcon:({tintColor})=>{
        return <MaterialCommunityIcons name="card-text-outline" size={25} color={tintColor} />
    }
})

export default exit