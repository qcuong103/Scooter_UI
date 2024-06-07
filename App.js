/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigator/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
    // <View style={{
    //   flex: 1,
    //   justifyContent:'center',
    //   alignItems: 'center',
    // }}>
    //   <Text>asda</Text>
    // </View>
  );
}
