import React from 'react';
import ZipCodeScreen from './screen/ZipCodeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: Constants.statusBarHeightght
  },
});
