import {View,Text,Button,StyleSheet} from 'react-native';
import React,{Component} from 'react';
import{Container,Icon} from 'native-base';



class HomeScreen extends React.Component{

render(){
    return(
            <Container>

                <Button
                    title="Grade8th"
                    onPress={()=>this.props.navigation.navigate('Grade8th')}
                />
              <Icon type="FontAwesome" name="home" />
              <Text style={{fontFamily:'Ubuntu-M'}}>
                hello kannada
              </Text>
            </Container>

    );
}

};

export default HomeScreen;