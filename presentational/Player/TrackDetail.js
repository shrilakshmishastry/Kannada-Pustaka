import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TrackDetail = ({title})=>(
    <View style={{alignItems:'center',marginTop:hp('3%')}}  >
        <Text style={{fontFamily:'Raleway-Medium',fontSize:20}} >
           {title}
        </Text>
        <Text style={{fontFamily:'Raleway-Bold',fontSize:15,color:'#a26ffd'}} >
            Economics Std 8th
        </Text>
    </View>

);
export default TrackDetail;