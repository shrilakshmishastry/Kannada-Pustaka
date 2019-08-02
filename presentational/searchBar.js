import {View,Text,StyleSheet,Image,Linking,Alert,ScrollView,Touch,TouchableWithoutFeedback} from 'react-native';
import React,{Component} from 'react';
import{Container,Icon,Button,Card,CardItem,Body,Left,Thumbnail } from 'native-base';
import {SearchBar} from 'react-native-elements';




class Searchbar extends React.Component{
    state={
        search:'',
    };
    updateSearch = search =>{
        this.setState({search});
    };
    render(){
        return(
            <View style={{marginLeft:10,marginRight:10}} >
               <SearchBar
                    placeholder="Search Podcasts"
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                     lightTheme ='true'
                    containerStyle = {{
                        backgroundColor:'white',
                       }}
                      round = 'true'
                      inputContainerStyle = {{
                        height:25
                      }}
                      inputStyle={{
                        color:'black'
                      }}
                />
            </View>
        );
    }
};

export default Searchbar;