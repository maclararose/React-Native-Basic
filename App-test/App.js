import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({name: 'Bem vindo: ' + texto});
    }else{
      this.setState({name: ''});
    }
    
  }

  render(){
    return(
      <View>

      <TextInput 
      style={styles.input} 
      placeholder = "Type your name"
      underlineColorAndroid="transparent"
      onChangeText={this.pegaNome}
      />

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