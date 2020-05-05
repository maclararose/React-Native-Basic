import React, { Component } from 'react';
import { View, Text} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{flex: 1, 
                    flexDirection: 'row', 
                    justifyContent: 'flex-end', 
                    alignItems: 'strecth'
                  }}>

        <View style={{height: 50, backgroundColor: '#FF0000'}}></View>

        <View style={{height: 50, backgroundColor: 'grey'}}></View>

        <View style={{height: 50, backgroundColor: 'yellow'}}></View>

        <View style={{height: 50, backgroundColor: 'violet'}}></View>

      </View>

    );
  }
}


export default App;
