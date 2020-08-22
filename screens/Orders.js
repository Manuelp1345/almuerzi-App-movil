import React from 'react'  
import { View,StyleSheet,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'    
import ListItem from '../components/listitems' 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useFetch  from '../hooks/useFetch' 

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    list:{
        alignSelf:"stretch"
    },
    Text:{
        fontSize:30,
        paddingTop: 25,
        justifyContent:"center",
        alignItems:"center"
    },
    barra:{
        backgroundColor:"cyan",
        height:60,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        alignSelf:"stretch",
    },
})

const Load =()=>{
    const {loading,data} = useFetch("https://serverless-v2.manuelp1345.vercel.app/api/orders","screen")

    return(
        <View style={styles.container} >
        {loading
        ?
        <View style={styles.container}>
            <Text style={styles.Text}>Cargando...</Text>
            <ActivityIndicator size="large" color="cyan"/>
        </View>
        :   
        <FlatList
            style={styles.list}
            data={data}
            keyExtractor={x=> x._id}
            renderItem={ ({item}) =>
                <ListItem 
                onPress={() =>{} } 
                name={item.user_name}
                meal={item.meal_name}
                /> 
                }
        />
        }
    </View>
    )
}
const Orders = ({ navigation })=>{

    return(
        <>
        <View style={styles.barra} > 
            <TouchableOpacity onPress={()=> navigation.toggleDrawer() }> 
                <MaterialCommunityIcons name="menu" size={40} />
            </TouchableOpacity> 
        </View>
        <Load/>
        </>
    )
}

Orders.navigationOptions=({
    title: "Ordenes",
    drawerIcon:({tintColor})=>{
        return <MaterialCommunityIcons name="card-text-outline" size={25} color={tintColor} />
    }
})

export default Orders