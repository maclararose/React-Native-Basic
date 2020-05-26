import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      textoFrase: '',
      img: require('./src/biscoito.png'),

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Seus princípios valem mais para você do que dinheiro ou sucesso',
      'Não dê atenção às palavras vãs de más línguas.',
      'Seja orgulhoso, porém tolerante e generoso.',
      'Uma boa época para terminar tarefas antigas.',
      'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
      'Pense antes de falar, mas não fale tudo o que pensar.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"'+ this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render(){
    return(
      <View style={styles.container}>

      <Image 
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.textF}>{this.state.textoFrase}</Text>

      <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  img:{
    width: 250,
    height:250

  },

  textF:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: "italic",
    textAlign: 'center'

  },

  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,

  },

  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',

  }

});

export default App;
