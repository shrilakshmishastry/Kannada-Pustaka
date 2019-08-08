import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {Platform,Image,Text} from 'react-native';
import Home from './Home.js';
import Profile from './../presentational/profile.js';
import searchBar from './../presentational/searchBar.js';
import BookMark from './../presentational/bookMarks.js';
import HeaderHome from './../presentational/headerHome.js';
import {Icon} from 'native-base';



const HomeNavigator =  createMaterialBottomTabNavigator({

    "Home":{
        screen:Home,
        navigationOptions:{
            title:" ",

            tabBarIcon : ({focused,tintColor})=>(
                focused ?
                    <Icon type="MaterialCommunityIcons"  name="home" style={{color:'#a26ffd'}} />:
                    <Icon type="MaterialCommunityIcons"  name="home" style={{color:'#6c757d'}} />

            ),
        },
    },
    "searchBar":{
        screen:searchBar,
         navigationOptions:{
              title:" ",
           headerTintColor:'black',
             headerTransparent:true,
            tabBarIcon : ({focused,tintColor}) =>(
                focused?
                    <Icon type="MaterialIcons" name="search" style={{color:'#a26ffd'}}/>:
                    <Icon type="MaterialIcons" name="search" style={{color:'#6c757d'}} />
            ),

           },
    },
     BookMark:{
          screen:BookMark,
           navigationOptions:{
                      title:" ",
                      tabBarIcon:({focused,tintColor})=>(
                        focused?
                        <Icon type="AntDesign" name="download" style={{color:'#a26ffd'}} />:
                        <Icon type="AntDesign" name="download" style={{color:'#6c757d'}} />
                      ),


          },
      },},

    {
         initialRouteName: 'Home',
         barStyle:{
            backgroundColor:'white'
         },
         activeColor:'black',
         inactiveColor:'#6c757d',
         shifting:false
    },


);



export default HomeNavigator;