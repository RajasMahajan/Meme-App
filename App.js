import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from "./Navigations/TabNavigator";
export default class App extends React.Component{
  render(){

    return <AppNavigator />;
     
    
  }
  
}

const AppSwitchNavigator = createSwitchNavigator({
 BottomTabNavigator
});
const AppNavigator = createAppContainer(AppSwitchNavigator)


