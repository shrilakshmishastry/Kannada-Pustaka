import {View,Text,FlatList,ActivityIndicator,ScrollView,TouchableHighlight} from 'react-native';
import React,{Component} from 'react';
import {ListItem,SearchBar} from 'react-native-elements';
import axios from 'axios';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon,Card,CardItem,ScrollableTab} from 'native-base';

class searchBar extends React.Component {
    state={
        data:[],
        array:[{chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        {chapterName: 'ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ',date: '3 oct 2019'},
        ],
        loading:false,
        search:''
    };
    componentDidMount(){
        this.setState({
            data:this.state.array
        });

    };
    renderItem =({item,index})=>(

            <View style={{marginLeft:hp('3%'),marginRight:hp('3%')}} >
              <TouchableHighlight onPress={()=>this.props.navigation.navigate('HomeScreen')} >
                <Card style={{paddingBottom:hp('2%'),
                shadowColor: "#000",
                shadowOffset: {
                	width: 0,
                	height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                }} >
                    <CardItem cardBody style={{marginLeft:hp('3%')}} >
                        <Text style={{fontFamily:'Raleway-Bold',fontSize:12,marginTop:hp('1%')}} >
                           chapter {index+1} :{this.state.data[index].chapterName}
                        </Text>
                        <Icon type="FontAwesome" name="play-circle-o" style={{color:'#a26ffd',marginLeft:hp('5%'),marginTop:hp('2%')}} />
                    </CardItem>
                    <CardItem cardBody  >
                         <Text style={{fontFamily:'Raleway-Bold',fontSize:10,marginLeft:hp('3%'),color:'#6c757d'}} >
                                                    {this.state.data[index].date}
                          </Text>
                    </CardItem>
                </Card>
                </TouchableHighlight>
            </View>


    );
    _keyExtractor = ({item,index})=> index;
     updateSearch = search =>{
            this.setState({search});
            const newData = this.state.array.filter(
            item=>{
                const itemData = item.chapterName.toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) >-1;
            }

            );
            this.setState({
                data:newData
            });

        };


 render(){
    return(
        <ScrollView>
        <View style={{flexDirection:'column',backgroundColor:'white'}} >
           <View style={{backgroundColor:'white',marginBottom:hp('2%'),backgroundColor:'#a26ffd',
           paddingBottom:hp('2%')}} >
               <Text style={{marginTop:hp('4%'),fontFamily:'Raleway-Bold',fontSize:20,
               marginLeft:hp('4%'),color:'white'}} >
                      Search Topics
               </Text>
           </View>
           <View style={{alignSelf:'stretch'}} >
               <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                ListHeaderComponent={
                      <SearchBar
                                    placeholder="Search Podcast"
                                    onChangeText={this.updateSearch}
                                    value={this.state.search}
                                    containerStyle={{
                                        backgroundColor:'white',
                                        borderTopColor:'white',
                                        borderBottomColor:'white',
                                        height:hp('10%'),
                                        marginLeft:hp('2%'),
                                        marginRight:hp('2%')

                                    }}
                                    round='true'
                                inputContainerStyle={{
                                    backgroundColor:'#e8e8e8',
                                }}
                       />

                }
               />
           </View>
        </View>
       </ScrollView>
    );
 }
}


export default searchBar;