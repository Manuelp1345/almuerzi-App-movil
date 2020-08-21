import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import MealsScreen from "./screens/Meals"
import Modal from './screens/Modal' 

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

export default createAppContainer (RootStack)