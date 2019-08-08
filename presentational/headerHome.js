import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


class HeaderHome extends React.Component{
    render(){
        return(
            <View style={{alignSelf:'stretch',flexDirection:'row',
            justifyContent:'space-between', backgroundColor: '#e5efdb'}} >
                <View style={{margin:hp('2%'),marginBottom:hp('1%'),marginLeft:hp('3%')}} >
                    <Image source={require('./../assets/images/JustLogo.png')} style={{height:hp('10%'),width:wp('19%')}} />
                </View>
                <View style={{margin:hp('2%'),marginBottom:hp('1%'),marginRight:hp('3%')}} >
                    <Text style={{}}  >
                        <Text style={{color:'#bf9021',fontSize:40}}  >
                                    o
                        </Text>
                        <Text style={{color:'#a26ffd',fontSize:40}} >
                                                    L
                        </Text>
                        <Text style={{color:'#c27aa0',fontSize:40}} >
                                                            i
                        </Text>
                        <Text style={{color:'#a62d1a',fontSize:40}} >
                                            b
                        </Text>
                    </Text>
                </View>
           </View>
        );
    };



};

export default HeaderHome;