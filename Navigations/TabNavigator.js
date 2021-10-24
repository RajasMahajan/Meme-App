import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TellScreen from "./Screens/TellScreen";
import TrendScreen from "./Screens/TrendScreen";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
     return(
     <Tab.Navigator>
     <Tab.Screen name="Tell" component={TellScreen} /> 
     <Tab.Screen name="Trend" component={TrendScreen} />    
     </Tab.Navigator>
     )}
export default BottomTabNavigator