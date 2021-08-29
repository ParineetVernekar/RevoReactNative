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
import { useNavigation } from '@react-navigation/native';
import { useMediaQuery } from 'react-responsive'


function Item ({ item })  {
    const navigation = useNavigation(); // navigation hook
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
      })
return(
    <TouchableOpacity
        onPress={()=>{
            // alert(`Hey ${item.name}`)
            navigation.navigate('BottleDetailsModal', {
                bottle: item
            })
        }
        }
    >
    <View style={[homeStyles.item, isDesktopOrLaptop ? homeStyles.itemDesktop : null]}>
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
    </TouchableOpacity>
)
};
export default function HomeScreen({ route, navigation }) {
    const { signOut } = React.useContext(AuthContext);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 717px)'
      })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('AccountScreen')}
                >
                    <View style={{ margin: 15 }}
                    >
                        <FontAwesome5 name="user" size={25} />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const renderItem = ({ item }) => (
        <Item item={item} navigation={navigation} />
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


                    <View style={isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ? { flexDirection: 'row' } : null}>
                    <FlatList
                        data={bottleData}
                        renderItem={renderItem}
                        keyExtractor={item => item.bottleId}
                    />
                    {isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ? null : <Divider style={styles.separatorStyle} /> }
                    
        <View>
                    <View style={isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ? homeStyles.circularProgressDesktop : homeStyles.circularProgress}>
                        <CustomCircularProgress fill={4} />
                    </View>
                    <View style={ isDesktopOrLaptop || (!isPortrait && isDesktopOrLaptop) ? {paddingRight:20} : null}>

                    <AddNewBottle navigation={navigation} destination={'BarcodeScanner'} />
                    <FindRefillStation navigation={navigation} destination={'FindRefillStation'} />
                    </View>
                    </View>
                    </View>

                    <StatusBar style="auto" />
                    <View style={{ height: 40 }}></View>

                </View>
            </ScrollView>
        </LinearGradient>
    )
}

