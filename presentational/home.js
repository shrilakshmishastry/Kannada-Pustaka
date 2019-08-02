import {View,Text,StyleSheet,Image,Linking,Alert,ScrollView,Touch,TouchableHighlight,FlatList,Dimensions} from 'react-native';
import React,{Component} from 'react';
import{Container,Icon,Button,Card,CardItem,Body,Left,Thumbnail } from 'native-base';
import Searchbar from './searchBar.js';
import {List,ListItem} from 'react-native-elements';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';

const styles = StyleSheet.create({
    cardstyle:{
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height:hp('20%'),
    width:wp('89%')
    }


});


class HomeScreen extends React.Component{
    state={
        url:[
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5c8e54906e9a7f537d3bc1e1/1554308722233/8thEconomics2016-Cover.png?format=300w',
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5a4a9ff653450a63fe8313fc/1514844359654/8thpolitical-sc.jpg?format=300w',
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5a4aa3e3e2c483236c15002b/1514844147683/8thpolitical-pol.jpg?format=300w',
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5ca4da636e9a7f5e6c5b7ba4/1554307835884/Screenshot+2019-04-03+at+16.41.34.png?format=300w',
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5c02c2dd8a922dd6f31a2adc/1554308863831/9th+Social+Science+%282017+syllabus%29+Part+2.png?format=300w',
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5c8ea4bd6e9a7f537d3efa81/1554308102334/10thSocialScience02-2017-cover.png?format=300w',
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5a4a7fbeec212ddd0805a802/1514844730180/2+PUC+history+Textbook-1.jpg?format=300w',
        'https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/589e0833d2b85720b6c3db95/5a4a4eb19140b7ea14185c8e/1514845591299/2+PUC+Kan+Textbook-1.jpg?format=300w'
        ],

        substd:[
            'Grade8thEconomics',
            'Grade8thPoliticalScience',
            'Grade8thSoicology',
            'Grade9thEconomics',
            'Grade9thSocialScience',
            'Grade10thSocialScience',
            'Grade12thHistory',
            'Grade12thKannada'

        ],
        dates:[
        '3/17/2019',
        '1/02/2018',
        '1/02/2018',
        '1/02/2018',
        '1/02/2018',
        '3/17/2019',
        '3/17/2019',
        '3/17/2019'

        ],
        description:[
            'This contains Podcasts of 8th Standard Economics textbook...',
            'This contains Podcasts of 8th Standard Political Science textbook...',
            'This contains Podcasts of 8th Standard Soicology textbook... ',
            'This contains Podcasts of 9th Standard Economics textbook ...',
            'This contains Podcasts of 9th Standard Social Science textbook...',
            'This contains Podcasts of 10th Standard Social Science textbook...',
            'This contains Podcasts of 2 nd PUC History textbook ...',
             'This contains Podcasts of 2 nd PUC Kannada textbook...',
        ],
        width:Dimensions.get('screen').height-10,
        height:Dimensions.get('screen').width
    };
    componentDidMount(){
        axios.get('https://itunes.apple.com/search?media=podcast&entity=podcast&attribute=artistTerm&term=kannadapustaka')
        .then(res=>{
            console.log(res.data.results[0].feedUrl);
            axios.get(res.data.results[0].feedUrl)
            .then(res=>{

            }

            )
        })
        }

    render(){
        return(
            <View>
            <ScrollView  >
              <FlatList
                      data={[
                         {key:'Economics'},{key:'Political Science'},{key:'Soicology'},{key:'Economics'},
                         {key:'Social Science'},{ key:'SocialScience'},{key:'History'},
                         {key:'Kannada'}
                        ]}

                          renderItem={ ({item,index})=>
              <TouchableHighlight onPress={()=>this.props.navigation.navigate(this.state.substd[index])} >
                <View style={{flexDirection:'row',margin:16,marginTop:2,marginBottom:5}} >
                    <Card style={styles.cardstyle} >
                        <View style={{flexDirection:'row',
                        marginTop:hp('1.5%')}}>
                            <View style={{width:wp('35%'),height:hp('20%'),
                            alignItems:'center',alignSelf:'flex-start' }} >
                                <Image source={{uri:this.state.url[index]}}
                                style={{height:hp('17%'),width:wp('30%'),borderRadius:5}} />
                            </View>
                            <View style={{alignSelf:'center',height:110,width:150,
                            alignItems:'center',marginLeft:10}} >
                                <Text style={{fontSize:12,fontFamily:'Raleway-Light',
                                color:'#6c757d',textAlign:'left',alignSelf:'flex-start'}} >
                                {this.state.dates[index]}
                                </Text>
                                <Text style={{fontSize:15,fontFamily:'Raleway-Bold',alignSelf:'flex-start',paddingTop:3}}  >
                                    {item.key}
                                </Text>
                                <Text style={{fontSize:12,fontFamily:'Raleway-Light',
                                  color:'#6c757d',textAlign:'left',alignSelf:'flex-start'}} >
                                     {this.state.description[index]}
                                </Text>

                            </View>
                        </View>
                    </Card>
                </View>
              </TouchableHighlight>
                }/>
              </ScrollView>
            </View>

        );
    }
};

export default HomeScreen;