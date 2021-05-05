import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FbScreen from "./screens/fb"
import InstaScreen from "./screens/in"
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createAppContainer} from "react-navigation"
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FbScreen},
  Instagram:{screen:InstaScreen}
})

const AppContainer = createAppContainer(TabNavigator)