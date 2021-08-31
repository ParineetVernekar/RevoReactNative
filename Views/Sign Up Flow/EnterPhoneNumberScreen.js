import React from 'react';
import {  Text, View, TouchableOpacity,  KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Divider } from 'react-native-paper';
import { styles } from '../../StyleSheet'
import { FontAwesome5 } from '@expo/vector-icons';
import PhoneInput from "react-native-phone-number-input";

export default function EnterPhoneNumberScreen({ navigation }) {
    const [text, changeText] = React.useState('07');
  

    const buttonDisabled = text.length == 0 ? styles.verifyPhoneNumberButtonBackgroundDisabled : styles.verifyPhoneNumberButtonBackground
  
  function isPhoneNumber(){
    return false
  }
    
    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.modalView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <View style={{flexDirection:'row'}}>
          <Text style={styles.enterPhoneNumberInfoText}>Enter phone number</Text>
          </View> 
          <View style={{flexDirection:'row', justifyContent:'center', margin:15, maxWidth: 600  
}}>
          <View style={{justifyContent:'center', alignItems:'flex-end', backgroundColor:'white', height: 60, width:60}}>
            <Text>+44</Text>
          </View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => {
              var filteredText = text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
              var re = /^([0-9]+([0-9]+)+)$/
              changeText(filteredText);
            }}
                        value={text}
            autoFocus
            placeholder="Enter phone number"
            style={styles.enterPhoneNumber}
            keyboardType="numeric"
            maxLength={11}
          />
          </View>
          {/* <PhoneInput
            // ref={phoneInput}
            defaultValue={text}
            value={text}
            defaultCode="GB"
            layout="first"
            onChangeText={(text) => {
              var filteredText = text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
              console.log(filteredText)
              changeText(filteredText);
            }}
            autoFocus
            // textInputStyle={{backgroundColor:'green', borderWidth:0}}
            textInputProps={{maxLength:10}}
            // textContainerStyle={styles.enterPhoneNumber}
            containerStyle={styles.enterPhoneNumber}

          /> */}
          <Divider style={styles.enterPhoneNumberDividerStyle} />
  
          <View>
            <TouchableOpacity style={[styles.verifyPhoneNumberButton, buttonDisabled]}
              onPress={() =>
                navigation.navigate('OTPModal', {
                  phoneNumber: text,
                })
              }
  
              disabled={isPhoneNumber()}
            >
              <Text style={styles.verifyPhoneNumberButtonText}>VERIFY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
  
    );
  
  
  
  }
  