import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, width:100, height:100, backgroundColor:'red'}}></View>
        <View style={{flex: 2,width:100, height:100, backgroundColor:'blue'}}></View>
        <View style={{flex: 3,width:100, height:100, backgroundColor:'green'}}></View>
      </View>
    );
  }
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  };