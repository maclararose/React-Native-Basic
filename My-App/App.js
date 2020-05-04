import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let nome = 'Maria';
    let img = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Text>Olá Mundo!</Text>

        <Text>Meu Primeiro App</Text>

        <Text style={{ color:'#FF0000', fontSize: 20, margin: 15 }}>
          Alternativa Nerd
        </Text>

        <Text style={{ fontSize: 30, color: 'blue' }}>{nome}</Text>

        <Jobs largura={500} altura={200} nome="Stte JOBS"/>

      </View>
    );
  }
}

class Jobs extends Component{
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Image 
          source={{ uri: img }}
          style={{ width:this.props.largura, height:this.props.altura }}
        />

    <Text style={{ fontSize: 30 }}>{this.props.nome}</Text>
      </View>

    );
  }
}

export default App;
