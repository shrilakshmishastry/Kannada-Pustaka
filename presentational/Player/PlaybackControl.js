import React,{Component} from 'react';
import {View,Text,TouchableHighlight,Modal,Alert} from 'react-native';
import {Container,Content,Button,Toast,Header,Root,Icon,Card,CardItem} from 'native-base';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


class PlaybackControl extends React.Component{
    state={
        showToast:false
    };
    setModalVisible(visible){
        this.setState({
            showToast:visible
        });

    };
    render(){
        return(
          <View style={{marginTop:20}} >
            <Modal
                animationType="side"
                transparent={true}
                visible={this.state.showToast}
                onRequestClose={()=>{
                    Alert.alert("Previous is maintained")
                }}
            >
                <View style={{marginTop:hp('25%')}} >
                    <View style={{marginTop:50,marginLeft:20,marginRight:20}} >
                        <Card style={{shadowColor: "#000",
                                      shadowOffset: {
                                      	width: 0,
                                      	height: 5,
                                      },
                                      shadowOpacity: 0.34,
                                      shadowRadius: 6.27,

                                      elevation: 10,}} >
                            <CardItem header bordered style={{justifyContent:'center'}} >
                                <Text style={{fontFamily:'Raleway-Bold',fontSize:20}} >
                                Playback Speed
                                </Text>
                            </CardItem>
                            <TouchableHighlight onPress={()=>{
                                this.setState({showToast:!this.state.showToast});
                                    this.props.set(0.5)
                            }} >
                              <CardItem bordered  style={{justifyContent:'center'}}>
                                    <Text style={{fontFamily:'Raleway-Medium',fontSize:20}} >
                                    0.5x
                                    </Text>
                              </CardItem>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={()=>{
                                 this.setState({showToast:!this.state.showToast});
                                 this.props.set(1)
                            }} >
                                <CardItem bordered style={{justifyContent:'center'}}  >
                                    <Text style={{fontFamily:'Raleway-Medium',fontSize:20}} >
                                    1x
                                    </Text>
                               </CardItem>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={()=>{
                             this.setState({showToast:!this.state.showToast});
                                 this.props.set(1.5)
                            }} >
                                <CardItem  bordered style={{justifyContent:'center'}} >
                                    <Text style={{fontFamily:'Raleway-Medium',fontSize:20}} >
                                                1.5x
                                    </Text>
                               </CardItem>
                            </TouchableHighlight>
                       </Card>
                    </View>
                </View>
            </Modal>
            <View style={{flexDirection:'row',justifyContent:'space-around'}} >
                <View style={{height:100,width:50}} >
                    <TouchableHighlight
                        onPress={()=>{
                        this.setModalVisible(true)
                    }}
                    underlayColor='#a26ffd'
                    style={{alignItems:'center',padding:3,borderColor:'#a26ffd',
                                  borderWidth:1,borderRadius:10}}
                    >
                        <Text style={{fontFamily:'Raleway-Medium',fontSize:13,color:'#a26ffd'}} selectionColor="white" >
                        {this.props.rate} x
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={{height:100,width:100,alignItems:'flex-end'}} >
                    <Icon name="infocirlceo" type="AntDesign" style={{color:'#a26ffd',marginRight:10,fontSize:20}} />
                </View>
            </View>
          </View>
        );

    }

};
export default PlaybackControl;