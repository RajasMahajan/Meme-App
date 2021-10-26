import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from "./navigation/TabNavigator";
export default class App extends React.Component{
  render(){

    return <AppNavigator />;
     
    
  }
  
}

const AppSwitchNavigator = createSwitchNavigator({
 BottomTabNavigator:BottomTabNavigator
});
const AppNavigator = createAppContainer(AppSwitchNavigator)


