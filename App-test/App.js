import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      input: ''
    };

    this.enter = this.enter.bind(this);
  }

  enter(){
    if(this.state.input === ''){
      alert('Digite seu nome!');
      return;
    }
    
    this.setState({name: 'Bem vindo(a), '+ this.state.input});
  }

  render(){
    return(
      <View>

      <TextInput 
      style={styles.input} 
      placeholder = "Type your name"
      underlineColorAndroid="transparent"
      onChangeText={ (texto) => this.setState({input: texto}) }
      />

      <Button title="Enter" onPress={this.enter}/>

    <Text style={styles.text}> {this.state.name}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 70,
    fontSize: 20,
    padding: 10

  },

  text:{
    textAlign: 'center',
    fontSize: 25

  }

})

export default App;