import React from 'react'  
import { View,StyleSheet,Text, FlatList } from 'react-native'    
import ListItem from '../components/listitems' 
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
    }
})

const Meals = ({ navigation })=>{

    const {loading, data} = useFetch("https://serverless-v2.manuelp1345.vercel.app/api/meals")

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
                    onPress={() => navigation.navigate("Modal", { _id: item._id, }) } 
                    name={item.name}
                    /> 
                    }
                />
            }
        </View>
    )
}

Meals.navigationOptions=({
    title: "Comidas Disponibles"
})

export default Meals 