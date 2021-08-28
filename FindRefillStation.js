import React from 'react';
import {Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { styles } from './StyleSheet';
import { SvgUri } from 'react-native-svg';

export default function FindRefillStation({navigation, destination}){
    return(
        <TouchableOpacity
                        style={styles.addBottleButton}
                        //

                        onPress={() => {
                            // if( Platform.OS === 'web'){
                            //     window.open('https://www.google.com/maps/d/u/0/edit?mid=1NN1dsbUOVR2QFLT-b-s_CFCD1-8HdJJ0&usp=sharing').focus();                                       
                            // } else{
                                navigation.navigate(destination)
                            // }
                        
                        }}
                    >
                        <View style={styles.addbottlebuttonSubView}>
                            <View>
                                <Text style={styles.addBottleSubText}>Where do I get refillable bottles?</Text>
                                <Text style={styles.addBottleText}>Find a refill station near you</Text>
                            </View>
                         
                            <Image style={styles.buttonImage} source={require('./assets/MapCellGlyph.png')} />

            </View>
                    </TouchableOpacity>
    )
}