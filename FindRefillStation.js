import React from 'react';
import {Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './StyleSheet';
export default function FindRefillStation({navigation, destination}){
    return(
        <TouchableOpacity
                        style={styles.addBottleButton}
                        onPress={() => navigation.navigate(destination)}
                    >
                        <View style={styles.addbottlebuttonSubView}>
                            <View>
                                <Text style={styles.addBottleSubText}>Where do I get refillable bottles?</Text>
                                <Text style={styles.addBottleText}>Find a refill station near you</Text>
                            </View>
                            <Image source={require('./assets/MapCellGlyph.png')} />
                        </View>
                    </TouchableOpacity>
    )
}