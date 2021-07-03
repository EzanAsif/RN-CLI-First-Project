import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Home(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Camera')}
        style={{
          backgroundColor: 'blue',
          height: 30,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
        }}>
        <Text style={{color: 'white'}}>Go to camera page</Text>
      </TouchableOpacity>
    </View>
  );
}
