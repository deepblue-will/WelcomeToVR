import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{display: 'flex', flexDirection:'column'}}>
          <Image
            source={asset('urapico.jpg')}
            style={{
              width: 3, 
              height: 4,
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -10]}]
            }} />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
