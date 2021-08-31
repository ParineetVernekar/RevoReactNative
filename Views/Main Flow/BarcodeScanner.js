import { StyleSheet, Dimensions, Platform, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from '../../StyleSheet';
import { Camera } from 'expo-camera';

export default function CustomBarcodeScanner({navigation}){
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
   const handleBarCodeScanned = ({ type, data }) => {

    let barcodeType = type;
    let barcodeData = data;
   console.log(barcodeData)
   console.log(barcodeType)
   if (barcodeData.includes("?c=")){
    console.log()
    var index = barcodeData.indexOf('?c=')
    var bottleCode = barcodeData.substring(index+3)
    console.log(bottleCode)
    alert(`Bottle ${bottleCode} has been scanned!`);
}

  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}
      onBarCodeScanned={handleBarCodeScanned}
      
      barCodeScannerSettings={{
        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
      }}
      > 
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
        </Camera>
    </View>
  );
}