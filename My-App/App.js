import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={[styles.textOne, styles.aligmentText]}>Eu sou o texto 1</Text>
        <Text style={styles.aligmentText}>Eu sou o texto 2</Text>
        <Text style={styles.aligmentText}>Eu sou o texto 3</Text>
        <Text style={styles.aligmentText}>Eu sou o texto 4</Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 100,
    
  },

  textOne:{
    color: 'red',
    fontSize: 30
  },

  aligmentText:{
    textAlign: 'center'

  }

});

export default App;
