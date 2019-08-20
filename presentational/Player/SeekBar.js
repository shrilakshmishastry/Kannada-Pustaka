import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';

function pad(n,width,z=0){
    n=n+'';
    return n.length>=width ? n:new Array(width-n.length+1).join(z)+n;
};

const minutesAndSeconds = (position)=>([
    pad(Math.floor(position/60),2),
    pad(position%60,2),

]);


const SeekBar = ({
    trackLength,
    currentPosition,
    onSeek,
    onSlidingStart,
})=>{
    const elapsed  = minutesAndSeconds(currentPosition);
    const remaining = minutesAndSeconds(trackLength-currentPosition);
    return(
        <View style={styles.container} >
            <View style={{flexDirection:'row'}} >
                <Text style={styles.text} >
                    {elapsed[0]+':'+elapsed[1]}
               </Text>
               <View style={{flex:1}} />
               <Text style={styles.text} >
                    {remaining[0]+":"+remaining[1]}
               </Text>
            </View>
            <Slider
                maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                onSlidingStart={onSlidingStart}
                onSlidingComplete={onSeek}
                value = {currentPosition}
                style={styles.slider}
                minimumTrackTintColor="#a26ffd"
                maximumTrackTintColor='#6c757d'
                thumbStyle={styles.thumb}
                trackStyle={styles.track}
                thumbTintColor='#a26ffd'
            />
        </View>

    );
};

const styles = StyleSheet.create({
  slider: {
    marginTop: 2,
    },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: hp('3%'),
    marginLeft:hp('3%'),
    marginRight:hp('3%')
  },
  track: {
    height: 2,
    borderRadius: 1,

  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    color:'#a26ffd'
  },
  text: {
    fontFamily:'Railway-Medium',
    fontSize: 12,
    textAlign:'center',
  }
});


export default SeekBar;

