import { StyleSheet, Dimensions, Platform, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './StyleSheet';
import { Camera } from 'expo-camera';
import MapView from 'react-native-maps';
import WebView from 'react-native-webview';
export default function FindRefillStationScreen({navigation}){
  if (Platform.OS === 'web') {
    return <iframe style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width}} src="https://www.google.com/maps/d/u/0/embed?mid=1NN1dsbUOVR2QFLT-b-s_CFCD1-8HdJJ0" />;
}
return   <WebView style={styles.map} source={{ uri: 'https://www.google.com/maps/d/u/0/edit?mid=1NN1dsbUOVR2QFLT-b-s_CFCD1-8HdJJ0&usp=sharing' }} />
;
 
  return (
    <View style={{ flex: 1 }}>
     <Text>Hi</Text>
     {/* <MapView
     style={{  width: Dimensions.get('window').width,
     height: Dimensions.get('window').height}}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  /> */}
  
  <WebView style={styles.map} source={{ uri: 'https://www.google.com/maps/d/u/0/edit?mid=1NN1dsbUOVR2QFLT-b-s_CFCD1-8HdJJ0&usp=sharing' }} />
    </View>
  );
}