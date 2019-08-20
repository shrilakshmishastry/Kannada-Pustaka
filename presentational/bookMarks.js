import {View,Text,ScrollView,TouchableHighlight,Linking} from 'react-native';
import React,{Component} from 'react';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Icon} from 'native-base';

class BookMark  extends React.Component {
        render(){
                return(
                    <ScrollView>
                        <View style={{flexDirection:"column"}} >
                            <View style={{backgroundColor:'#a26ffd',alignSelf:'stretch',paddingBottom:hp('2%'),paddingTop:hp('2%')}} >

                                <Text style={{fontSize:20,color:'white',marginLeft:hp('4%'),marginTop:hp('3%'),fontFamily:'Raleway-Bold'}} >
                                Settings
                                </Text>
                            </View>
                            <TouchableHighlight
                             onPress={()=>this.props.navigation.navigate("HomeScreen")}
                             underlayColor='white'
                             >
                           <View  style={{alignSelf:'stretch',flexDirection:'column',marginTop:hp('4%')}} >
                              <View style={{flexDirection:'row',marginLeft:hp('4%')}} >
                                <View style={{marginRight:hp('3%')}} >
                                    <Icon  name="download" type="AntDesign" style={{color:'#a26ffd',fontSize:25}} />
                                </View>
                                <View style={{}} >
                                    <Text style={{fontFamily:'Raleway-Bold',fontSize:15,marginTop:hp('1%')}} >
                                       Downloads
                                    </Text>
                                </View>
                              </View>
                              <View style={{alignSelf:'stretch',margin:hp('6%'),marginTop:hp('1%'),marginBottom:hp('2')}} >
                                <Text style={{fontFamily:'Raleway-Medium',color:'#6c757d',marginLeft:hp('5%'),fontSize:12}}  >
                                    lInstead of decorating juicy peppermint tea with herring, use six teaspoons olive oil and one package baking powder bottle.
                                </Text>
                              </View>
                           </View>
                           </TouchableHighlight>
                            <TouchableHighlight
                            onPress={()=>Linking.openURL('https://kannadapustaka.org/our-vision')}
                          underlayColor='white'
                                >
                                  <View  style={{alignSelf:'stretch',flexDirection:'column',padding:hp('2%'),paddingLeft:0}} >
                                     <View style={{flexDirection:'row',marginLeft:hp('4%')}} >
                                       <View style={{marginRight:hp('3%')}} >
                                           <Icon  name="text" type="Entypo" style={{color:'#a26ffd'}} />
                                       </View>
                                     <View style={{}} >
                                       <Text style={{fontFamily:'Raleway-Bold',fontSize:15,marginTop:hp('1%')}} >
                                       About
                                       </Text>
                                     </View>
                                   </View>
                                   <View style={{alignSelf:'stretch',margin:hp('6%'),marginTop:hp('1%'),marginBottom:0}} >
                                       <Text style={{fontFamily:'Raleway-Medium',color:'#6c757d',marginLeft:hp('5%'),fontSize:12}}  >
                                    lInstead of decorating juicy peppermint tea with herring, use six teaspoons olive oil and one package baking powder bottle.
                                       </Text>
                                   </View>
                                </View>
                            </TouchableHighlight>
                           <TouchableHighlight
                              onPress={()=>Linking.openURL('https://kannadapustaka.org/manual')}
                              underlayColor='white'
                             >
                                <View  style={{alignSelf:'stretch',flexDirection:'column',padding:hp('2%'),paddingLeft:0}} >
                                   <View style={{flexDirection:'row',marginLeft:hp('4%')}} >
                                     <View style={{marginRight:hp('3%')}} >
                                         <Icon  name="hands-helping" type="FontAwesome5" style={{color:'#a26ffd',fontSize:20}} />
                                     </View>
                                     <View style={{}} >
                                         <Text style={{fontFamily:'Raleway-Bold',fontSize:15,marginTop:hp('1%')}} >
                                                 Get Involved
                                         </Text>
                                     </View>
                                   </View>
                                    <View style={{alignSelf:'stretch',margin:hp('6%'),marginTop:hp('1%'),marginBottom:0}} >
                                         <Text style={{fontFamily:'Raleway-Medium',color:'#6c757d',marginLeft:hp('5%'),fontSize:12}}  >
                                                  lInstead of decorating juicy peppermint tea with herring, use six teaspoons olive oil and one package baking powder bottle.
                                             </Text>
                                    </View>
                                </View>
                           </TouchableHighlight>
                          <TouchableHighlight
                            onPress={()=>Linking.openURL('https://kannadapustaka.org/contact')}
                            underlayColor='white'
                           >
                              <View  style={{alignSelf:'stretch',flexDirection:'column',padding:hp('2%'),paddingBottom:hp('5%'),paddingLeft:0}} >
                                 <View style={{flexDirection:'row',marginLeft:hp('4%')}} >
                                   <View style={{marginRight:hp('3%')}} >
                                       <Icon  name="phone" type="FontAwesome" style={{color:'#a26ffd'}} />
                                   </View>
                                   <View style={{}} >
                                        <Text style={{fontFamily:'Raleway-Bold',fontSize:15,marginTop:hp('1%')}} >
                                               Contact
                                       </Text>
                                   </View>
                                 </View>
                                <View style={{alignSelf:'stretch',margin:hp('6%'),marginTop:hp('1%'),marginBottom:0}} >
                                   <Text style={{fontFamily:'Raleway-Medium',color:'#6c757d',marginLeft:hp('5%'),fontSize:12}}  >
                                        lInstead of decorating juicy peppermint tea with herring, use six teaspoons olive oil and one package baking powder bottle.
                                   </Text>
                                </View>
                              </View>
                          </TouchableHighlight>
                        </View>
                    </ScrollView>
                );


        }


}

export default BookMark;