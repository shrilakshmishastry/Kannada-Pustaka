import {View,Text,StatusBar,ScrollView,Image,FlatList,TouchableHighlight,} from 'react-native';
import React,{Component,useState} from 'react';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import{Card,CardItem } from 'native-base';
import AlbumArt from './Player/AlbumArt.js';
import TrackDetail from './Player/TrackDetail.js';
import SeekBar from './Player/SeekBar.js';
import Controls from './Player/Controls.js';
import Video from 'react-native-video';
import PlaybackControl from './Player/PlaybackControl.js';


class Economics8th extends React.Component{
    state={
        paused:true,
        totalLength:1,
        currentPosition:0,
        selectedTrack:0,
        tracks: [
                 {
                   title: 'Stressed Out',
                   artist: 'Twenty One Pilots',
                   albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
                   audioUrl: "https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/t/5ca4db77085229d56caf2464/1554307974925/11+9th+Economics+2016+Chapter+10+%E0%B2%AF%E0%B3%8B%E0%B2%97%E0%B2%95%E0%B3%8D%E0%B2%B7%E0%B3%87%E0%B2%AE%E0%B2%A6+%E0%B2%85%E0%B2%B0%E0%B3%8D%E0%B2%A5%E0%B2%B6%E0%B2%BE%E0%B2%B8%E0%B3%8D%E0%B2%A4%E0%B3%8D%E0%B2%B0.mp3",
                 },
                 {
                   title: 'Love Yourself',
                   artist: 'Justin Bieber',
                   albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
                   audioUrl: "https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/t/5ca4db77085229d56caf2464/1554307974925/11+9th+Economics+2016+Chapter+10+%E0%B2%AF%E0%B3%8B%E0%B2%97%E0%B2%95%E0%B3%8D%E0%B2%B7%E0%B3%87%E0%B2%AE%E0%B2%A6+%E0%B2%85%E0%B2%B0%E0%B3%8D%E0%B2%A5%E0%B2%B6%E0%B2%BE%E0%B2%B8%E0%B3%8D%E0%B2%A4%E0%B3%8D%E0%B2%B0.mp3",
                 },
                 {
                   title: 'Hotline Bling',
                   artist: 'Drake',
                   albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
                   audioUrl: "https://static1.squarespace.com/static/57ed94f3b8a79b1f99f831aa/t/5ca4db77085229d56caf2464/1554307974925/11+9th+Economics+2016+Chapter+10+%E0%B2%AF%E0%B3%8B%E0%B2%97%E0%B2%95%E0%B3%8D%E0%B2%B7%E0%B3%87%E0%B2%AE%E0%B2%A6+%E0%B2%85%E0%B2%B0%E0%B3%8D%E0%B2%A5%E0%B2%B6%E0%B2%BE%E0%B2%B8%E0%B3%8D%E0%B2%A4%E0%B3%8D%E0%B2%B0.mp3",
                 },
               ],
               rate:1.5,
               showToast:false

    };

    seek(time){
        time = Math.round(time);
        this.refs.audioElement && this.refs.audioElement.seek(time);
        this.setState({
            currentPosition:time,
            paused:false
        });

    };

    setDuration(data){
        this.setState({totalLength:Math.floor(data.duration)});
    };

    setTime(data){
        this.setState({currentPosition:Math.floor(data.currentTime)});
    };

    onBack(){

         if (this.state.currentPosition > 10 && this.state.totalLength > 0) {
              this.refs.audioElement && this.refs.audioElement.seek(this.state.currentPosition-10);
              this.setState({ isChanging: true });
              var total = this.state.totalLength;
              var currentPosition = this.state.currentPosition-10;
               this.setState({
                currentPosition: this.state.currentPosition,
                paused: false,
                totalLength: total,
                isChanging: false,

              });
            } else {

              this.refs.audioElement.seek(0);
              this.setState({
                currentPosition: 0,
              });
            }

    };
    onForward() {

        if (this.state.currentPosition < this.state.totalLength) {

          this.refs.audioElement && this.refs.audioElement.seek(this.state.currentPosition+10);

          this.setState({ isChanging: true });
          var total = this.state.totalLength ;

          this.setState({
            currentPosition: this.state.currentPosition,
            totalLength: total,
            paused: false,
            isChanging: false,

          });

        }
      };
      setRate(value){
        this.setState({
            rate:value
        });
        console.log(this.state.rate);
      };

    render(){

    const track = this.state.tracks[0]
    const video = this.state.isChanging ? null : (
      <Video source={{uri: track.audioUrl}} // Can be a URL or a local file.
        ref="audioElement"
        paused={this.state.paused}               // Pauses playback entirely.
        resizeMode="cover"           // Fill the whole screen at aspect ratio.
        repeat={true}                // Repeat forever.
        rate={this.state.rate}
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        onEnd={this.onEnd}           // Callback when playback finishes
        onError={this.videoError}    // Callback when video cannot be loaded
        style={styles.audioElement} />
    );

        return(
            <View>
                <AlbumArt/>
                <TrackDetail title={' ಗ್ರಾಹಕರ ಶಿಕ್ಷಣ ಮತ್ತು ರಕ್ಷಣೆ'} />
                <SeekBar
                    onSeek={this.seek.bind(this)}
                    trackLength={this.state.totalLength}
                    onSlidingStart={()=>this.setState({paused:true})}
                    currentPosition={this.state.currentPosition}
                />
                <Controls
                   forwardDisabled={this.state.selectedTrack === this.state.tracks.length-1}
                   onPressPlay={()=>this.setState({paused:false})}
                   onPressPause = {()=>this.setState({paused:true})}
                   onBack={this.onBack.bind(this)}
                   paused={this.state.paused}
                    onForward={this.onForward.bind(this)}
                />
                <PlaybackControl
                    rate={this.state.rate}

                    set={this.setRate.bind(this)}
                />
                {video}
            </View>

        );


    }


}

export default Economics8th;
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};