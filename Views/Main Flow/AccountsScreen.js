import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, Image, Linking } from 'react-native';
import { Divider } from 'react-native-paper';
import { accountStyle, styles } from '../../StyleSheet';
import { LinearGradient } from 'expo-linear-gradient';
import AddNewBottle from '../Custom Components/AddNewBottle';
import AuthContext from '../../AuthContext';
import { WebView } from 'react-native-webview';
import { SvgUri } from 'react-native-svg';
import { useMediaQuery } from 'react-responsive'

import FindRefillStation from '../Custom Components/FindRefillStation';
export default function AccountScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContext);
    const [helpView, setShowHelpView] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 717px)'
      })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    function loadURL(url) {
        if (Platform.OS === 'web') {
            window.open(url).focus();
        } else {
            navigation.navigate('LegalModal', {
                givenUrl: url
            })
        }
    }

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#ffffff', '#EBF6F7']}
            style={styles.background}
        >
            <ScrollView>
                <View style={accountStyle.container}>
                    <View style={isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ?{flexDirection:'row'}:null}>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={accountStyle.hippo}
                                source={require('./../../assets/settingsProfile.png')} />
                            <Text style={accountStyle.phoneNumber}>+44 748 389 7140</Text>

                            <FindRefillStation destination={'FindRefillStation'} navigation={navigation} />
                            <AddNewBottle destination={'BarcodeScanner'} navigation={navigation} />
                        </View>
            {isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ? null : <Divider style={styles.separatorStyle} />}
                        

                        <View style={isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ? accountStyle.joinViewDesktop : accountStyle.joinView}>
                            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                <Text style={accountStyle.joinText}>Join us in the </Text>
                                <Text style={[accountStyle.joinText, { color: '#2FBB89', fontWeight: 'bold' }]}> #ReuseRevolution</Text>
                            </View>
                            <Text>
                                <Text style={{ fontWeight: 'bold' }}>120 billion pieces </Text>
                                <Text>of plastic beauty packaging are made every year and over </Text>
                                <Text style={{ fontWeight: 'bold' }}>95% are only used once. </Text>
                                <Text>The more times you wash and refill this bottle the more plastic you will save.</Text>
                                <Text>{"\n"}</Text>
                                <Text>{"\n"}</Text>

                                <Text>By using this packaging, you use </Text>
                                <Text style={{ fontWeight: 'bold' }}>99% less plastic </Text>
                                <Text> versus the plastic equivalent packaging. So the more you reuse this bottle, the more plastic you're saving!</Text>
                                <Text>{"\n"}</Text>
                            </Text>
                            <TouchableOpacity
                                onPress={() => loadURL('https://expo.dev')
                                }
                            >
                                <Text style={{ color: '#2FBB89', fontWeight: 'bold' }}>Learn more</Text>
                            </TouchableOpacity>
                            <Image style={accountStyle.treeImage} source={require('./../../assets/treeCentral.png')} />

                        </View>

                    </View>

                    <View style={ isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ? {  alignSelf:'center', flexDirection:'row', } : {alignSelf:'center'}}>
                        <TouchableOpacity
                            onPress={() => {
                                loadURL('https://expo.dev')
                            }
                            }                            >
                            <Text style={accountStyle.accountEndButtons}>HELP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                loadURL('https://expo.dev')
                            }
                            }
                        >
                            <Text style={accountStyle.accountEndButtons}>LEGAL</Text>
                        </TouchableOpacity>
                        {Platform.OS === 'web' ? <TouchableOpacity
                            onPress={() =>

                                alert(`App download link coming soon!`)
                            }
                        >
                            <Text style={accountStyle.accountEndButtons}>GET THE APP</Text>
                        </TouchableOpacity> : null}
                    </View>
                    <Divider style={accountStyle.bottomDivider} />
                    <TouchableOpacity
                        onPress={signOut}>
                        <Text style={accountStyle.accountEndButtons}>SIGN OUT</Text>
                    </TouchableOpacity>

                    {helpView ? <WebView
                        style={{ height: 100 }}
                        source={{ uri: 'https://expo.dev' }}
                    /> : null}

                    <View style={{ height: 80 }}></View>

                </View>
            </ScrollView>
        </LinearGradient>
    )
}