import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Camera(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Camera Screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={{
          backgroundColor: 'blue',
          height: 30,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
        }}>
        <Text style={{color: 'white'}}>Go to Home page</Text>
      </TouchableOpacity>
    </View>
  );
}
