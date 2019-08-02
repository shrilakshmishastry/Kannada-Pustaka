import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {Platform,Image,Text} from 'react-native';
import Home from './Home.js';
import Profile from './../presentational/profile.js';
import TheWall from './../presentational/thewall.js';
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
                    <Icon type="MaterialCommunityIcons"  name="home" style={{color:'#818a51'}} />:
                    <Icon type="MaterialCommunityIcons"  name="home" style={{color:'#6c757d'}} />

            ),
        },
    },
    "The Wall":{
        screen:TheWall,
         navigationOptions:{
            title:" ",
            tabBarIcon : ({focused,tintColor}) =>(
                focused?
                    <Icon type="Foundation" name="list-bullet" style={{color:'#818a51'}}/>:
                    <Icon type="Foundation" name="list-bullet" style={{color:'#6c757d'}} />
            ),

           },
    },
     BookMark:{
          screen:BookMark,
           navigationOptions:{
                      title:" ",
                      tabBarIcon:({focused,tintColor})=>(
                        focused?
                        <Icon type="AntDesign" name="download" style={{color:'#818a51'}} />:
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