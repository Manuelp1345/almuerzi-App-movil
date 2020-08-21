import React from 'react' 
import { Text,TouchableOpacity, StyleSheet, TouchableOpacityBase } from 'react-native' 

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        height:60,
        justifyContent:"center",
        borderBottomColor: "#bbb",
        borderBottomWidth:1
    
    },
    Text:{
        fontSize:18,
    }
})

export default ({ name, onPress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.Text}> {name} </Text>
        </TouchableOpacity>
    )
}