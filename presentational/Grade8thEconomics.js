import {View,Text,Image,ScrollView,TouchableHighlight,StatusBar,FlatList} from 'react-native';
import React,{Component} from 'react';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Card,CardItem,ScrollableTab,Content} from 'native-base';

class  Grade8thEconomics extends React.Component{
 state={
        chapterName:[' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',
        ],

        date:[
           '3 oct 2019',
          '3 oct 2019',
           '3 oct 2019',
           '3 oct 2019',
           '3 oct 2019',
           '3 oct 2019',
           '3 oct 2019',
           '3 oct 2019',
           '3 oct 2019',
          ]

    };
render(){
    return(
        <ScrollView  >

            <View style={{flexDirection:'column'}} >
                <View style={{height:hp('30%'),backgroundColor:'white',
                alignSelf:'stretch',flexDirection:'row',}} >
                    <View style={{marginTop:hp('10%')}} >
                        <Image source={require('./../assets/images/8thEconomics2016Cover.png')}
                            style={{height:hp('19%'),width:wp('35%'),borderRadius:5,marginLeft:hp('5%')}} />
                    </View>
                    <View style={{marginTop:hp('13%'),marginLeft:hp('3%')}} >
                        <Text style={{fontFamily:'Raleway-Medium',textAlign:'left',fontSize:20}} >
                            Economics
                        </Text>
                        <Text style={{fontFamily:'Raleway-Medium',color:'#6c757d'}} >
                            Std 8 th Podcasts
                        </Text>
                        <TouchableHighlight
                            style={{alignItems:'center',padding:5,backgroundColor:'#a26ffd',
                            borderRadius:10,marginTop:hp('2%'),}}
                              onPress = {()=>this.props.navigation.navigate('PoliticalScience8th')}
                              underlayColor='#a26ffd'
                            >
                                    <Text style={{fontFamily:'Raleway-Medium',fontSize:13,color:'white'}}  >
                                            SUBSCRIBE
                                    </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{alignSelf:'stretch'}} >
                    <Tabs renderTabBar={()=> <ScrollableTab
                            style={{backgroundColor:'white'}}

                          />}

                            tabBarUnderlineStyle={{backgroundColor:'#a26ffd'}}
                        >
                        <Tab heading="Podcasts" tabStyle={{ backgroundColor: "white" }} activeTextStyle={{color:'black'}}
                             textStyle={{color:'black'}} activeTabStyle={{ backgroundColor: "white" }}
                            >
                              <View style={{alignSelf:'stretch',marginTop:hp('2%')}}  >
                                <FlatList
                                            data={[{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'},{key:'6'},{key:'7'},{key:'8'},{key:'9'}]}
                                            renderItem={({item,index})=>
                                    <TouchableHighlight
                                                onPress={()=>this.props.navigation.navigate('Economics8th')}
                                                underlayColor='white'
                                    >
                                        <View style={{marginLeft:hp('3%'),marginRight:hp('3%')}} >
                                            <Card style={{paddingBottom:hp('2%'),
                                                            shadowColor: "#000",
                                                                                shadowOffset: {
                                                                                	width: 0,
                                                                                	height: 2,
                                                                                },
                                                                                shadowOpacity: 0.25,
                                                                                shadowRadius: 3.84,
                                                                                elevation: 5,
                                                                                borderRadius:6
                                            }}>
                                                <CardItem cardBody style={{marginLeft:hp('2%'),marginTop:hp('2%')}} >
                                                    <Text style={{fontFamily:'Raleway-Bold',
                                                            fontSize:12}} >
                                                                Chapter {item.key}: {this.state.chapterName[index]}
                                                    </Text>
                                                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('HomeScreen')}
                                                            style={{marginLeft:hp('5%')}} underlayColor='white' >
                                                        <Icon type="FontAwesome" name="play-circle-o" style={{color:'#a26ffd'}} />
                                                    </TouchableHighlight>
                                                </CardItem>
                                                <CardItem cardBody >
                                                    <Text style={{fontSize:10,fontFamily:'Raleway-Bold',color:'#6c757d',
                                                        marginLeft:hp('2%'),}} >
                                                                    {this.state.date[index]}
                                                    </Text>
                                                </CardItem>
                                            </Card>
                                        </View>
                                    </TouchableHighlight>
                                            }
                                        />
                                </View>
                            </Tab>
                            <Tab heading="Info" tabStyle={{ backgroundColor: "white"}} textStyle={{color:'black'}} activeTabStyle={{ backgroundColor: "white" }}
                                activeTextStyle={{color:'black'}}
                            >

                                <View style={{marginLeft:hp('3%'),marginRight:hp('3%'),marginTop:hp('2%')}} >
                                    <Text style={{textAlign:'left',fontFamily:'Raleway-Medium',marginTop:hp('5%')}} >
                                        Write something about podcast.
                                                Klingons are the space suits of the strange x-ray vision.Career is not parallel in over there, the realm of bliss, or nirvana, but everywhere.
                                              Bilge rats travel on yellow fever at port degas!Enlightenment, sainthood and a crystal monastery.
                                     </Text>
                                </View>
                                <View style={{marginLeft:hp('3%'),marginTop:hp('5%'),marginRight:hp('3%'),paddingBottom:hp('4%')}}  >
                                    <Text style={{textAlign:'left',fontFamily:'Raleway-Bold',color:'#a26ffd'}} >
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
                            </Tab>
                        </Tabs>
                  </View>
            </View>
        </ScrollView>
);
}
}

export default Grade8thEconomics;