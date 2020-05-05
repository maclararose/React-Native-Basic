import React, { Component } from 'react';
import { View, Text} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{flex: 1, 
                    flexDirection: 'row', 
                    justifyContent: 'flex-end', 
                    alignItems: 'center'
                  }}>

        <View style={{width: 50, height: 50, backgroundColor: '#FF0000'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'grey'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'violet'}}></View>

      </View>

    );
  }
}


export default App;
