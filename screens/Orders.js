import React,{useState, useEffect} from 'react'  
import { View,StyleSheet,Text, FlatList, TouchableOpacity,ScrollView } from 'react-native'    
import ListItem from '../components/listitems' 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useFetch  from '../hooks/useFetch' 

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"flex-start",
        justifyContent: "flex-start"
    },
    list:{
        alignSelf:"stretch"
    },
    Text:{
        flex:2,
        fontSize:30,
    },
    barra:{
        flexDirection:"row",
        backgroundColor:"cyan",
        height:60,
        alignItems:"center",
        justifyContent:"space-between",
        alignSelf:"stretch",
        paddingTop:20,
        paddingBottom:-5
    }
})

const Load =()=>{
    const {loading,data} = useFetch("https://serverless-v2.manuelp1345.vercel.app/api/orders")

    return(
        <View style={styles.container} >
        {loading
        ?
            <Text style={styles.Text} > Cargando... </Text>
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