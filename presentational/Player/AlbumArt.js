import React,{Component} from 'react';
import {View,Image,Text} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


const AlbumArt = ({url})=>(
        <View style={{alignItems:'center',marginTop:hp('5%')}}  >
            <Image source={require('./../../assets/images/9theconomics.png')} style={{height:hp('40%'),width:wp('70%')}} />
        </View>
);

export default AlbumArt;