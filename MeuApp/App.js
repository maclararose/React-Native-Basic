import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let nome = 'Maria';

    return(
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{ color:'#FF0000', fontSize: 20, margin: 15 }}>
          Alternativa Nerd
        </Text>

        <Image
          source={{uri: 'https://sujeitoprogramador.com/steve.png' }}
          style={{width: 300, height: 300}}
        />

        <Text style={{ fontSize: 30, color: 'blue' }}>{nome}</Text>

      </View>
    );
  }
}

export default App;