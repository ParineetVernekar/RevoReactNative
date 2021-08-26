import React from 'react';
import { View, Text, Button, FlatList, Image, ScrollView, Circle, TouchableOpacity } from 'react-native';
import AuthContext from './AuthContext';
import { homeStyles, styles } from './StyleSheet'
import { LinearGradient } from 'expo-linear-gradient';
import { bottleData } from './dataObjects';
import { FontAwesome5 } from '@expo/vector-icons';

// import { CircularProgress } from 'react-native-circular-progress';
import CircularProgress from './CircularProgress'
import { Divider } from 'react-native-paper';
// import { CircularProgress } from 'react-native-circular-progress';
import CustomCircularProgress from './CustomCircularProgress';
import { StatusBar } from 'expo-status-bar';
import AddNewBottle from './AddNewBottle';
import FindRefillStation from './FindRefillStation';

const Item = ({ item }) => (
    <View style={homeStyles.item}>
        <View style={homeStyles.itemSubView}>
            <Image style={{ width: 69, height: 134 }} source={{
                uri: "https://d1qk4sbf0ixo5r.cloudfront.net/thumbnails/Alberto_Conditioner-a189d6fb-14af-42e1-abb1-58371d8b0dd4-5c8f6649-fc44-43bf-a0a7-cdd575f9379e.png",
            }} />
            <View style={homeStyles.name}>
                <Text style={homeStyles.maker}>{item.maker}</Text>

                <Text >{item.name}</Text>

            </View>
        </View>
    </View>
);
export default function HomeScreen({ route, navigation }) {
    const { signOut } = React.useContext(AuthContext);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.navigate('AccountScreen')}
            >
<View style={styles.container}>
      <FontAwesome5 name="user" size={25} />
    </View>           
     </TouchableOpacity>
          ),
        });
      }, [navigation]);

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#ffffff', '#EBF6F7']}
            style={styles.background}
        >
            <ScrollView>
                <View style={{ flex: 1 }}>

                    <View style={homeStyles.homeBanner}>
                        <View style={homeStyles.homeBannerItemContainer}>
                            <Text style={homeStyles.homeBannerItemSubText}>Trees Planted</Text>
                            <Text style={homeStyles.homeBannerItemMainText}>1</Text>
                        </View>
                        <View style={homeStyles.homeBannerItemContainer}>
                            <Text style={homeStyles.homeBannerItemSubText}>Bottles saved</Text>
                            <Text style={homeStyles.homeBannerItemMainText}>3</Text>
                        </View>
                        <View style={homeStyles.homeBannerItemContainer}>
                            <Text style={homeStyles.homeBannerItemSubText}>Carbon Saved</Text>
                            <Text style={homeStyles.homeBannerItemMainText}>0.22kg</Text>
                        </View>
                    </View>

                    <FlatList
                        data={bottleData}
                        renderItem={renderItem}
                        keyExtractor={item => item.bottleId}
                    />
                                        <Divider style={styles.separatorStyle} />

                    <View style={homeStyles.circularProgress}>
                        <CustomCircularProgress fill={4} />
                    </View>
                    <AddNewBottle navigation={navigation} destination={'BarcodeScanner'}/>
                    <FindRefillStation  navigation={navigation} destination={'BarcodeScanner'} />
                    <StatusBar style="auto" />
        <View style={{height:40}}></View>
        
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

