import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-paper';
import { styles } from './StyleSheet'
import { LinearGradient } from 'expo-linear-gradient';
import tree from './assets/tree.png'
import AddNewBottle from './AddNewBottle';

export default function LandingScreen ({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <LinearGradient
        // Background Linear Gradient
        colors={['#ffffff', '#EBF6F7']}
        style={styles.background}
      >
        <Image style={styles.tinyLogo} source={require('./assets/landingPage.png')} /> 
        {/* <Image style={styles.tinyLogo} source={{uri:"https://revo-test.vendsmart.tech/images/bottle-lg.png"}} /> */}
        <SafeAreaView style={styles.container}>

        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.revoText}>REVO</Text>
            <Text style={styles.homeSubText}>Sustainable Cosmetics</Text>
  
            <Divider style={styles.dividerStyle} />
          </View>
          <Text style={styles.mainText}>Sign up, refill,
            recycle, plant a tree, and save earth</Text>
          <View style={styles.buttonContent}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('EnterPhoneNumberModal')}
            >
              <Text style={styles.signUpButtonText}>SIGN UP & PLANT A TREE</Text>
            </TouchableOpacity>
            <Text style={styles.signUpSubText}>(Seriously, we will plant a tree when you sign up)</Text>
          </View>
          <Divider style={styles.buttonDivider} />
         <AddNewBottle navigation={navigation} destination={'EnterPhoneNumberModal'}/>
          <StatusBar style="auto" />

        </View>
        </SafeAreaView>

      </LinearGradient>
    )
  }