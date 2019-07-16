import {View,Text} from 'react-native';
import React from 'react';
import {createStackNavigator}  from 'react-navigation';
import HomeScreen from './../presentational/home.js';
import Economics8th from './../presentational/economics8th.js';
import Economics9th from './../presentational/economics9th.js';
import Grade8th from './../presentational/grade8th.js';
import Grade9th from './../presentational/grade9th.js';
import Grade10th from './../presentational/grade10th.js';
import Grade12th from './../presentational/grade12th.js';
import History12th from './../presentational/history12th.js';
import Kannada12th from './../presentational/kannada12th.js';
import PoliticalScience8th from './../presentational/politicalScience8th.js';
import SocialScience9th from './../presentational/socialScience9th.js';
import SocialScience10th from './../presentational/socialscience10th.js';
import Soicology8th from './../presentational/soicology8th.js';



const Home = createStackNavigator(
{
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:()=>({
            header:null
        }),
    },
    Grade8th:{
        screen:Grade8th
    },
    Grade9th:{
        screen:Grade9th
    },
     Grade10th:{
        screen: Grade10th
     },
     Grade12th :{
        screen:Grade12th
     },
     Economics8th :{
        screen:Economics8th
     },
     Economics9th:{
        screen:Economics9th
     },
     History12th:{
        screen:History12th
     },
     Kannada12th:{
        screen:Kannada12th
     },
     PoliticalScience8th:{
        screen:PoliticalScience8th
     },
      SocialScience9th:{
        screen:SocialScience9th
      },
      SocialScience10th:{
        screen:SocialScience10th
      },
      Soicology8th:{
        screen:Soicology8th
      }
},
{
    initialScreen:HomeScreen

}

);



export default Home;