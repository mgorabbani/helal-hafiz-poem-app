/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
   AppRegistry
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import TabScreen from './TabScreen'
 import About from './js/About'
 import Single from './js/Single'
 import SingleFav from './js/SingleFav'
 import store from './js/Store'
import SplashScreen from 'react-native-splash-screen'
 const App = StackNavigator({
   tab: { screen: TabScreen, navigationOptions: {
       header: {
           visible: false
       }
   } },
   about: { screen: About,navigationOptions: {
       title: "About Apps & Privacy Policy",
       header: {
           style: {
                 backgroundColor: '#12CC7B',
             },
             tintColor: '#fff',
             titleStyle: {
                 color: '#fff',
             }
       }

   } },
   single: {screen: Single,navigationOptions: {
       backTitle: null,


   }},
     singleFav: {screen: SingleFav,navigationOptions: {
       backTitle: null,


   }}
 }, {
     headerMode: 'none'
 });

class Main extends React.Component {
  constructor(props){
    super(props)
  }
     componentDidMount() {
         SplashScreen.hide();
     }
      render() {
     return(
         <App screenProps= {store}/>
     )
 }
}
AppRegistry.registerComponent('helalhafiz', () => Main);
