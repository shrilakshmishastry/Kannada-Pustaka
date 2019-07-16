import React,{useEffect,Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image:{
        marginTop:150,
        height:250,
        width:250,
        alignSelf:'center'
    }

});


class SplashImage extends React.Component{
     performTask = async()=>{
         return new Promise((resolve)=>{
             setTimeout( ()=>{resolve('result')},1000);
         }
         );
     };
     async componentDidMount(){
        const data=  await this.performTask();
        if (data!= null){
            this.props.navigation.navigate('HomeNavigator');
        }
    }
    render(){
    return(

            <View>
               <Image source={require('./../images/download.png')} style={styles.image} resizeMode="contain" />
            </View>
        );

    }



};

export default SplashImage;