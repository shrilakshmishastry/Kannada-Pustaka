/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import HomeNavigator from './components/HomeNavigator.js';
import SplashImage from './presentational/splashimage.js';

const App = createSwitchNavigator(
    {
        SplashImage:{
            screen:SplashImage
        },
        HomeNavigator:{
            screen:HomeNavigator,

        }

    },
    {
        initialRouteName:"SplashImage"
    }
);







export default createAppContainer(App);