import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import MealsScreen from "./screens/Meals"
import LoginScreen from "./screens/Login"
import RegisterScreen from "./screens/Register"
import Modal from './screens/Modal' 

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

const AppNavigator = createStackNavigator({
  Meals:{
    screen: MealsScreen
  },
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
  Onboarding: OnboardingNavigator,
  Root: RootStack
},{
  initialRouteName:"Onboarding",
  headerMode:"none"
})

export default createAppContainer (baseStack)