import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';


const Controls  = ({
    paused,
    onPressPlay,
    onPressPause,
    onBack,
    onForward,
    forwardDisabled

})=>(
    <View style={styles.container} >
        <TouchableOpacity onPress={onBack} >
            <Icon type="AntDesign" name="banckward"  style={{color:'#a26ffd'}} />
        </TouchableOpacity>
        <View style={{width:40}} />
            {!paused?
                <TouchableOpacity onPress={onPressPause} >
                    <View style={styles.playButton} >
                        <Icon name="pausecircle" type="AntDesign" style={{color:'#a26ffd',fontSize:40}} />
                    </View>
                </TouchableOpacity>:
                <TouchableOpacity onPress={onPressPlay} >
                    <View style={styles.playButton} >
                        <Icon name="play" type="AntDesign" style={{color:'#a26ffd',fontSize:40}} />
                    </View>
                </TouchableOpacity>
            }
            <View style={{width:40}} />
            <TouchableOpacity onPress={onForward}  >
                <Icon name="forward" type="AntDesign"  style={{color:'#a26ffd'}} />
            </TouchableOpacity>
    </View>


);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})

export default Controls;