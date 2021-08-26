import React from 'react';
import {Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Divider } from 'react-native-paper';
import { styles } from './StyleSheet'
import { FontAwesome5 } from '@expo/vector-icons';
import AuthContext from './AuthContext';
export default function OTPScreen({ route, navigation }) {
    const { signIn } = React.useContext(AuthContext);

    const { phoneNumber } = route.params;
    const [otp, onChangeOtp] = React.useState('');
    const buttonDisabled = otp.length == 0 ? styles.verifyPhoneNumberButtonBackgroundDisabled : styles.verifyPhoneNumberButtonBackground

    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.modalView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.enterPhoneNumberInfoText}>OTP sent to {phoneNumber}</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeOtp(text)}
            value={otp}
            autoFocus
            placeholder="Enter OTP"
            style={styles.enterPhoneNumber}
            keyboardType="numeric"
            maxLength={4}
            
          />
  
          <Divider style={styles.enterPhoneNumberDividerStyle} />
  
          <View>
            <TouchableOpacity style={[buttonDisabled, styles.verifyPhoneNumberButton]}
           onPress={() => signIn({ phoneNumber, otp })}
              disabled={otp.length == 0 ? true : false}
            >
              <Text style={styles.verifyPhoneNumberButtonText}>VERIFY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }