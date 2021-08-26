import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, Platform, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { accountStyle, styles } from './StyleSheet';
import { WebView } from 'react-native-webview';
import { FontAwesome5 } from '@expo/vector-icons';
export default function WebViewModal({route, navigation}){
  const [loading, setLoading] = useState(true);

  const { givenUrl } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            >
<View style={styles.container}>
      <FontAwesome5 name="times" size={25} />
    </View>           
     </TouchableOpacity>
          ),
        });
      }, [navigation]);

    return(
      <View style={{flex:1}}>
        <WebView 
        onLoad={()=>setLoading(false)}
      source={{ uri: givenUrl }}
    />
    {loading ?  <ActivityIndicator
          style={{ flex:20, justifyContent:'center',alignSelf:'center' }}
          size="large"
        /> : null}
    </View>
    )

}