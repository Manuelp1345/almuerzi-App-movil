import React from 'react'  
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View,StyleSheet,Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'    
import ListItem from '../components/listitems' 
import useFetch  from '../hooks/useFetch' 

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent: "center"
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

const Meals = ({ navigation })=>{

    const {loading, data} = useFetch("https://serverless-v2.manuelp1345.vercel.app/api/meals")

    return(
        <>
        <View style={styles.barra} > 
            <TouchableOpacity onPress={()=> navigation.toggleDrawer() }> 
                <MaterialCommunityIcons name="menu" size={40} />
            </TouchableOpacity> 
        </View>
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
                    onPress={() => navigation.navigate("Modal", { _id: item._id, }) } 
                    name={item.name}
                    /> 
                    }
                />
            }
        </View>
        </>
    )
}

Meals.navigationOptions=({
    title: "Menu",
    drawerIcon:({tintColor})=>{
        return <MaterialCommunityIcons name="food" size={25} color={tintColor} />
    }
})

export default Meals 