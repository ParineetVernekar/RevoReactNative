import React from 'react';
import {Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './StyleSheet';
import { SvgUri } from 'react-native-svg';

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

                            <Image style={styles.buttonImage} source={require('./assets/AddBottleGlyph.png')} />

  {/* <Image                             style={styles.buttonImage}
 source={{    uri:"https://revo-test.vendsmart.tech/refillIcon.svg"}}/> */}
                        </View>
                    </TouchableOpacity>
    )
}