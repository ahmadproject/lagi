import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
var Spinner = require('react-native-spinkit');

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home' }),
  ],
});


class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(resetAction);
    }, 2000);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#03a9f4', flex: 1}}>
        <StatusBar backgroundColor="#03a9f4" barStyle="light-content" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 48, color: '#FFFFFF', fontFamily: 'Chewy-Regular'}}>KAMUSKU</Text>
          <Text style={{ fontSize: 18, color: '#FFFFFF'}}>Kamus Bahasa Indonesia - Inggris</Text>
          <Spinner style={{marginTop: 20}} size={50} type={'ThreeBounce'} color={'#FFFFFF'} />
        </View>
        <Text style={{ textAlign: 'center', fontSize: 18, color: '#FFFFFF'}}>Gus Nando</Text>
        <Text style={{ textAlign: 'center', marginBottom: 20, color: '#FFFFFF'}}>Version 1.0 | 2020</Text>
      </View>
    );
  }
}

export default Splash;