import React from 'react';
import {  Text, View, TouchableOpacity,  KeyboardAvoidingView, Platform } from 'react-native';
import { Divider } from 'react-native-paper';
import { styles } from './StyleSheet'
import { FontAwesome5 } from '@expo/vector-icons';
import PhoneInput from "react-native-phone-number-input";

export default function EnterPhoneNumberScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
  

    const buttonDisabled = text.length == 0 ? styles.verifyPhoneNumberButtonBackgroundDisabled : styles.verifyPhoneNumberButtonBackground
  
    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.modalView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <Text style={styles.enterPhoneNumberInfoText}>Enter phone number</Text>
          <PhoneInput
            // ref={phoneInput}
            defaultValue={text}
            defaultCode="GB"
            layout="first"
            onChangeText={(text) => {
              onChangeText(text);
            }}
            autoFocus
            
            textContainerStyle={styles.enterPhoneNumber}
          />
          <Divider style={styles.enterPhoneNumberDividerStyle} />
  
          <View>
            <TouchableOpacity style={[styles.verifyPhoneNumberButton, buttonDisabled]}
              onPress={() =>
                navigation.navigate('OTPModal', {
                  phoneNumber: text,
                })
              }
  
              disabled={text.length == 0 ? true : false}
            >
              <Text style={styles.verifyPhoneNumberButtonText}>VERIFY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
  
    );
  
  
  
  }
  