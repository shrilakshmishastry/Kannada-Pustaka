import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {Platform} from 'react-native';
import Home from './Home.js';
import Profile from './../presentational/profile.js';
import TheWall from './../presentational/thewall.js';
import BookMark from './../presentational/thewall.js';
import {Icon} from 'native-base';

const HomeNavigator = createMaterialBottomTabNavigator({

    "Home":{
        screen:Home,
        navigationOptions:{
                title:"Home",
                tabBarIcon:({tintColor,focused})=>(
                    focused?
                   <Icon type="FontAwesome" name="home"  style={{color:"black"}} />
                   :  <Icon type="AntDesign" name="home"  style={{color:"black"}} />
                ),

            },
    },
    "The Wall":{
        screen:TheWall,
         navigationOptions:{
            title:"The Wall",
            tabBarIcon:({tintColor,focused})=>(
                focused?
               <Icon  type="Foundation" name="pencil" style={{color:"black"}} />
               :    <Icon type="FontAwesome" name="pencil-square-o"  style={{color:"black"}} />

            ),

           },
    },
     BookMark:{
          screen:BookMark,
           navigationOptions:{
                      title:"Downloads",
                      tabBarIcon:({tintColor,focused})=>(
                        focused?
                         <Icon  type="FontAwesome" name="download" style={{color:"black"}} />
                         :<Icon  type="AntDesign" name="save" style={{color:"black",fontSize:26}} />
                      ),
          },
          },
          Profile:{
                    screen:Profile,
                     navigationOptions:{
                                title:"Profile",
                                tabBarIcon:({tintColor,focused})=>(
                                  focused?
                                   <Icon  type="FontAwesome" name="user" style={{color:"black"}} />
                                   :<Icon  type="AntDesign" name="user" style={{color:"black"}} />
                                ),
                    },
                    }
},
    {
         initialRouteName: 'Home',
          barStyle: { backgroundColor: 'white',
            fontFamily:'Ubuntu-M'
           },

          activeTintColor:'black',
          shifting:true

    },


);



export default HomeNavigator;