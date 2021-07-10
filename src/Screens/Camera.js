import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BottomNav from '../Components/BottomNav/BottomNav';

export default function Camera(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{flex:6}}>Camera Screen</Text>
      <BottomNav link = {props} />
    </View>
  );
}
