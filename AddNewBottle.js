import React from 'react';
import {Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './StyleSheet';
export default function AddNewBottle({navigation, destination}){
    return(
        <TouchableOpacity
                        style={styles.addBottleButton}
                        onPress={() => navigation.navigate(destination)}
                    >
                        <View style={styles.addbottlebuttonSubView}>
                            <View>
                                <Text style={styles.addBottleSubText}>Already got a bottle?</Text>
                                <Text style={styles.addBottleText}>Let's add it to your account</Text>
                            </View>
                            <Image source={require('./assets/AddBottleGlyph.png')} />
                        </View>
                    </TouchableOpacity>
    )
}