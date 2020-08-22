import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import MealsScreen from "./screens/Meals"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OrdersScreen from "./screens/Orders"
import LoginScreen from "./screens/Login"
import RegisterScreen from "./screens/Register"
import AuthLoading from "./screens/AuthLoading"
import Modal from './screens/Modal' 
import { createDrawerNavigator } from "react-navigation-drawer"
import { AsyncStorage,View } from "react-native"
import React from 'react' 

const OnboardingNavigator = createStackNavigator({
  Login:LoginScreen,
  Register: RegisterScreen
},{
  initialRouteName:"Login",
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: "cyan"
    },
    headerTitleStyle:{
      textAlign:"center",
      fontWeight:"bold"
    }
  },
  headerMode:"none",
  
  
})

LoginScreen.navigationOptions ={
  title:"Iniciar Sesion",
}
RegisterScreen.navigationOptions ={
  title:"Registrarse",
}

const exit = ({ navigation })=>{
  AsyncStorage.removeItem("token")
  navigation.navigate("Login")
  return(
    <View>
    </View>
  )
}

exit.navigationOptions=({
  title: "Cerrar Sesion",
  drawerIcon:({tintColor})=>{
      return <MaterialCommunityIcons name="exit-to-app" size={25} color={tintColor} />
  }
})

const AppNavigator = createDrawerNavigator({
  Meals:{
    screen: MealsScreen
  },
  Ordenes:{
    screen: OrdersScreen
  },
  exit:{
    screen: exit
  }
},{
  initialRouteName: "Meals",
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: "cyan"
    },
    headerTitleStyle:{
      textAlign: "center"
    }
  }
})
const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal:{
    screen: Modal,
  }
},{
  mode:"modal",
  headerMode:"none"
})

const baseStack = createSwitchNavigator({
  AuthLoading,
  Onboarding: OnboardingNavigator,
  Root: RootStack
},{
  initialRouteName:"AuthLoading",
  headerMode:"none"
})

export default createAppContainer (baseStack)