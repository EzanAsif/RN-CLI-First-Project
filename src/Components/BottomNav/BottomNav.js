import React from 'react';
import {View, Text, TouchableOpacity, Button, SafeAreaView} from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import OctIconsIcon from 'react-native-vector-icons/Octicons'
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'
export default function BottomNav({link}) {
  return (
    <View style={{flex: 0.5, borderWidth : 2, borderColor : '#e5e5e5', width : '100%', flexDirection : 'row', justifyContent : 'space-around', alignItems : 'center', paddingLeft : 10, paddingRight : 10}}>
      <EntypoIcon
        name="home"
        size={30}
        onPress={() => {
          link.navigation.navigate('Camera');
        }}
      />
       <IconAntDesign
        name="search1"
        size={30}
        onPress={() => {
          link.navigation.navigate('Camera');
        }}
      />
       <OctIconsIcon
        name="diff-added"
        size={30}
        onPress={() => {
          link.navigation.navigate('Camera');
        }}
      />
       <EntypoIcon
        name="heart-outlined"
        size={32}
        onPress={() => {
          link.navigation.navigate('Camera');
        }}
      />
       <MaterialIconsIcon
        name="stop-circle"
        size={30}
        onPress={() => {
          link.navigation.navigate('Camera');
        }}
      />
    </View>
  );
}
