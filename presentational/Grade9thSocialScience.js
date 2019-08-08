import {View,Text,Image,ScrollView,TouchableHighlight} from 'react-native';
import React,{Component} from 'react';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button} from 'native-base';
class Grade9thSocialScience  extends React.Component{
render(){
    return(
        <ScrollView >
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('4%')}}  >
                <View style={{marginLeft:hp('3%'),marginTop:hp('3%')}} >
                    <Text style={{fontFamily:'Raleway-Medium',fontSize:18,textAlign:'left'}}  >
                       SocialScience
                    </Text>
                    <Text style={{fontFamily:'Raleway-Medium',fontSize:13,marginTop:hp('1%'),color:'#818a51'}} >
                        Kannada Pustaka Initiative
                    </Text>
                    <TouchableHighlight
                    style={{alignItems:'center',padding:5,borderColor:'#a26ffd',
                                            borderWidth:1,borderRadius:10,marginTop:hp('2%')}}
                      onPress = {()=>this.props.navigation.navigate('SocialScience9th')}
                      underlayColor='#a26ffd'
                    >
                       <Text style={{fontFamily:'Raleway-Medium',fontSize:13}}  >
                                Episodes
                        </Text>

                    </TouchableHighlight>
                </View>
                <View style={{marginRight:hp('3%')}} >
                    <Image source={{uri: 'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5c02c2dd8a922dd6f31a2adc/1554308863831/9th+Social+Science+%282017+syllabus%29+Part+2.png?format=300w'}}
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

export default Grade9thSocialScience ;