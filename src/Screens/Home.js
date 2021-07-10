import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BottomNav from '../Components/BottomNav/BottomNav';

export default function Home(props) {
  return (
    <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style ={{flex : 6,}}>Home Screen</Text>
      <BottomNav link = {props} />
    </View>
  );
}
