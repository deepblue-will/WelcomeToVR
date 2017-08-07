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
  constructor() {
    super()

    this.state = {
      translate: [0, 0, -10]
    }
  }

  escape() {
    this.setState({translate: [this.randomNumber(-10, 10), this.randomNumber(-10, 10), -10]})
  }

  randomNumber(min, max) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min;
  }

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
              transform: [{translate: this.state.translate}]
            }} 
            onEnter={this.escape.bind(this)}
            />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
