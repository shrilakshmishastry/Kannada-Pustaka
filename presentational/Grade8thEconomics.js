import {View,Text,Image,ScrollView,TouchableHighlight} from 'react-native';
import React,{Component} from 'react';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button} from 'native-base';
class  Grade8thEconomics extends React.Component{
render(){
    return(
        <ScrollView >
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('4%')}}  >
                <View style={{marginLeft:hp('3%'),marginTop:hp('3%')}} >
                    <Text style={{fontFamily:'Raleway-Medium',fontSize:18,textAlign:'left'}}  >
                        Economics
                    </Text>
                    <Text style={{fontFamily:'Raleway-Medium',fontSize:13,marginTop:hp('1%'),color:'#818a51'}} >
                        Kannada Pustaka Initiative
                    </Text>
                    <TouchableHighlight
                     style={{marginTop:hp('1%'),borderRadius:20}}
                      onPress = {()=>this.props.navigation.navigate('Economics8th')}
                      underlayColor='#818a51'
                    >
                        <Button bordered rounded style={{borderColor:'#818a51',height:hp('5%'),justifyContent:'center'}} >
                            <Text style={{fontFamily:'Raleway-Medium',fontSize:13}}  >
                                Episodes
                            </Text>
                        </Button>
                    </TouchableHighlight>
                </View>
                <View style={{marginRight:hp('3%')}} >
                    <Image source={{uri:'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5c8e54906e9a7f537d3bc1e1/1554308722233/8thEconomics2016-Cover.png?format=300w'}}
                    style={{height:hp('17%'),width:wp('30%'),borderRadius:5}} />
                </View>
            </View>
            <View style={{marginLeft:hp('3%'),marginRight:hp('3%'),borderTopWidth:1,marginTop:hp('2%'),color:'#818a51'}} >
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('5%')}} >
                Write something about podcast.
                Klingons are the space suits of the strange x-ray vision.Career is not parallel in over there, the realm of bliss, or nirvana, but everywhere.
              Bilge rats travel on yellow fever at port degas!Enlightenment, sainthood and a crystal monastery.
                 </Text>
            </View>
            <View style={{marginLeft:hp('3%'),marginTop:hp('5%'),marginRight:hp('3%'),paddingBottom:hp('4%')}}  >
                <Text style={{textAlign:'left',fontFamily:'Raleway-Bold',color:'#818a51'}} >
                    Contributing volunteers:
                </Text>
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('3%')}} >
                    Goutham Shridhar
                </Text>
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('3%')}} >
                    Jyothi Venkatasubramanya
                </Text>
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('3%')}} >
                    Lavanya HU
                </Text>
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('3%')}} >
                    Sarala Belur Venkateshan
                </Text>
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('3%')}} >
                    Shimoga Rakesh
                </Text>
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('3%')}} >
                    Shrikant Mishrikoti
                </Text>
                <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('3%')}} >
                    Yogesh Siddananjaiah
                </Text>
            </View>
        </ScrollView>
);
}
}

export default Grade8thEconomics;