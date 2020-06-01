import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './app/navigation';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
    }

  }
  
  render() {

    return (
        <Navigation/>

    );
  }

}
