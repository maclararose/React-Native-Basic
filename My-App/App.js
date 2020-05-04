import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };

    this.enter = this.enter.bind(this);
  }

  enter(name){
    this.setState({
      name: name
    })
  }

  render(){
    return(
      <View style={{ marginTop: 20 }}>
        <Text>Hello World!</Text>
        <Text style={{ fontSize: 30, color: 'purple', textAlign: 'center'}}> 
          {this.state.name}
        </Text>
        
        <Button title="Enter" onPress={() => this.enter('Ana')} />

      </View>

    );
  }
}

export default App;
