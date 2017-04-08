

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import ExpandableView from 'react-native-expandableview'

export default class example extends Component {
  render() {
    return (
          <View style={styles.container}>
           <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
         />
            <ExpandableView />
            <Image source={require('./watch2.png')}/>
          </View>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#55D49D',
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

AppRegistry.registerComponent('example', () => example);
