import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, ScrollView, Circle, TouchableOpacity } from 'react-native';
import { bottleDetailStyles, styles } from './StyleSheet';
import { FontAwesome5 } from '@expo/vector-icons';
export default function BottleDetailsScreen({ route, navigation }) {
    const { bottle } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <View style={{ margin: 15 }}
                    >
                        <FontAwesome5 name="times" size={25} />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    useEffect(() => {
        // Update the document title using the browser API
        navigation.setOptions({ headerTitle: `${bottle.maker}` })
    });

    return (
        <View style={bottleDetailStyles.container}>
            <View style={bottleDetailStyles.innerView}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 69, height: 134 }} source={{ uri: `${bottle.imageName}` }} />
                    <View style={bottleDetailStyles.textContainer}>
                        <Text style={{ fontSize: 19, flexShrink: 1 }}>{bottle.name}</Text>
                        <Text style={bottleDetailStyles.makerText}>{bottle.maker}</Text>
                    </View>
                </View>
                <Text> Bottle ID: {bottle.bottleId}</Text>

            </View>
        </View>
    )
}