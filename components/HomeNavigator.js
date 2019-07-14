import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Home from './../presentational/home.js';
import Profile from './../presentational/profile.js';
import TheWall from './../presentational/thewall.js';


const HomeNavigator = createMaterialBottomTabNavigator({

    Home:Home,
    "The Wall":TheWall,
     Profile:Profile
},
    {
         initialRouteName: 'Home',
          barStyle: { backgroundColor: 'white' },

    }

);



export default HomeNavigator;