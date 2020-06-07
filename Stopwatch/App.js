import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      botao: "GO!",
      last: null,
    };

    this.timer = null;

    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go(){
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;

        this.setState({botao: 'GO!'});
      }else{
        this.timer = setInterval(() => {
          this.setState({number: this.state.number + 0.1})
        }, 100);

        this.setState({botao: 'STOP!'})
      }

      
    }

   

  clear(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      last: this.state.number,
      number: 0,
      botao: 'GO!',

    })
  }

  render(){
    return(
      <View style={styles.container}>
        
      <Image
        source={ require('./src/cronometro.png') }
        style={styles.stopwatch}
      />

    <Text style={styles.timer}>{this.state.number.toFixed(2)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={this.go}>
          <Text style={styles.btnText}>{this.state.botao}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.clear}>
          <Text style={styles.btnText}>CLEAR</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.areaLast}>
          <Text style={styles.textTime}>
            {this.state.last > 0 ? 'Last time: '+ this.state.last.toFixed(2) + 's' : ''}
          </Text>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',

  },

  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',

  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,

  },

  btn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },

  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',

  },

  areaLast:{
    marginTop: 40,

  },

  textTime:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',

  },

});

export default App;