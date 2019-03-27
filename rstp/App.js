/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { VlcSimplePlayer, VLCPlayer } from 'react-native-yz-vlcplayer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <VlcSimplePlayer
          autoplay={false}
          url='rtsp://138.118.33.201:554/axis-media/media.amp?videocodec=h264'
          initType={2}
          hwDecoderEnabled={1}
          hwDecoderForced={1}
          initOptions={[
            "--no-audio",
            "--rtsp-tcp",
            "--network-caching=" + 150,
            "--rtsp-caching=" + 150,
            "--no-stats",
            "--tcp-caching=" + 150,
            "--realrtsp-caching=" + 150,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
