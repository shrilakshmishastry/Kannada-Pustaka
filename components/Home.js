import {View,Text,Image} from 'react-native';
import React from 'react';
import {createStackNavigator}  from 'react-navigation';
import HomeScreen from './../presentational/home.js';
import Economics8th from './../presentational/economics8th.js';
import Economics9th from './../presentational/economics9th.js';
import Grade8thEconomics from './../presentational/Grade8thEconomics.js';
import Grade8thPoliticalScience from './../presentational/Grade8thPoliticalScience.js';
import Grade8thSoicology from './../presentational/Grade8thSoicology.js';
import Grade9thEconomics from './../presentational/Grade9thEconomics.js';
import Grade9thSocialScience from './../presentational/Grade9thSocialScience.js';
import Grade10thSocialScience from './../presentational/Grade10thSocialScience.js';
import Grade12thHistory from './../presentational/Grade12thHistory.js';
import Grade12thKannada from './../presentational/Grade12thKannada.js';
import History12th from './../presentational/history12th.js';
import Kannada12th from './../presentational/kannada12th.js';
import PoliticalScience8th from './../presentational/politicalScience8th.js';
import SocialScience9th from './../presentational/socialScience9th.js';
import SocialScience10th from './../presentational/socialscience10th.js';
import Soicology8th from './../presentational/soicology8th.js';
import HeaderHome from './../presentational/headerHome.js';
import {Icon} from 'native-base';


const Home = createStackNavigator(
{
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:()=>({
            header:null

        }),

    },
   Grade8thPoliticalScience:{
        screen:Grade8thPoliticalScience,
        navigationOptions:()=>({
            title:"Std 8th Podcasts",
             headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />,

      }),
    },
    Grade8thSoicology:{
            screen:Grade8thSoicology,
            navigationOptions:({navigation})=>({
                title:"Std 8th Podcasts",
                 headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />,

          }),
        },
    Grade8thEconomics:{
            screen:Grade8thEconomics,
            navigationOptions:()=>({
                title:" ",
                   headerTintColor:'black',
                     headerTransparent:true,

          }),
        },
    Grade9thEconomics:{
        screen: Grade9thEconomics,
         navigationOptions:()=>({
                    title:"Std 9th Podcasts",

                }),
    },
    Grade9thSocialScience:{
            screen: Grade9thSocialScience,
             navigationOptions:()=>({
                        title:"Std 9th Podcasts",
                        headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
                    }),
        },
     Grade10thSocialScience:{
        screen: Grade10thSocialScience,
         navigationOptions:()=>({
                    title:"Std 10th Podcasts",
                    headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
                }),
     },
     Grade12thHistory :{
        screen:Grade12thHistory,
         navigationOptions:()=>({
                    title:"2 nd PUC Podcasts",
                    headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
                }),
     },
     Grade12thKannada :{
             screen:Grade12thKannada,
              navigationOptions:()=>({
                         title:"2 nd PUC Podcasts",
                         headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
                     }),
          },
    Economics8th :{
        screen:Economics8th,
        navigationOptions:()=>({
            title:" ",
             headerTransparent:true,

        }),
     },
   Economics9th:{
        screen:Economics9th,
        navigationOptions:()=>({
            title:"Economics Std 9th",
            headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />

        }),
     },
     History12th:{
        screen:History12th,
        navigationOptions:()=>({
            title:"History 12th",
            headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
        }),
     },
     Kannada12th:{
        screen:Kannada12th,
        navigationOptions:()=>({
            title:"Kannada 2nd PUC",
            headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
        }),
     },
     PoliticalScience8th:{
        screen:PoliticalScience8th,
        navigationOptions:()=>({
            title:"Political Science Std 8th",
            headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
        }),
     },
      SocialScience9th:{
        screen:SocialScience9th,
        navigationOptions:()=>({
            title:"Social Science Std 9th",
            headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
        }),
      },
      SocialScience10th:{
        screen:SocialScience10th,
        navigationOptions:()=>({
            title:"Social Science Std 10th",
            headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
        }),
      },
      Soicology8th:{
        screen:Soicology8th,
        navigationOptions:()=>({
            title:"Soicology Std 8th",
            headerBackImage:<Image source={require('./../assets/images/JustLogo.png')} style={{height:30,width:30}} />
        }),
      }
},
{
    initialScreen:HomeScreen

}

);



export default Home;