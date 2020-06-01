
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Home extends React.Component {
    constructor(){
        super();
    
        this.state = {
        }
    
      }
      
      render() {
    
        return (
            <View style={styles.container}>
            <Text>Hello World!</Text>
            </View>
        );
      }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });