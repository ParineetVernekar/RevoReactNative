import { View, Text, Button, FlatList, Image, ScrollView, Circle } from 'react-native';
import React from 'react';
import CircularProgress from './CircularProgress';
import { homeStyles, styles } from './StyleSheet';
import { SvgUri } from 'react-native-svg';
export default function CustomCircularProgress(props) {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 21 }}>{10-props.fill} more refills to</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 21 }}> plant a tree</Text>
            </View>
            <Text style={homeStyles.progressViewRefillsSubText}>We plant a tree with every 10 refills</Text>
            <CircularProgress
                size={240}
                width={15}
                fill={props.fill * 10}
                tintColor="#2FBB89"
                backgroundColor="#F5F5F5"
                lineCap='round'
                backgroundWidth={5}
                rotation={0}
                style={{ alignSelf: 'center', marginTop: 10 }}
            >{
                    (fill) => (
                        <View>
                            <Text style={homeStyles.progressMainText}>
                                {fill / 10}
                            </Text>
                            <Text style={homeStyles.progressSubText}>10 refills</Text>
                        </View>
                    )
                }
            </CircularProgress>
            {/* <Image style={styles.treeCentralImage} source={require('./assets/treeCentral.png')} /> */}
            <Image style={homeStyles.treeCentralImage} source={require('./assets/treeCentral.png')} /> 

            {/* <SvgUri
                            style={homeStyles.treeCentralImage}
    uri="https://revo-test.vendsmart.tech/treeicon.svg"
  /> */}
        </View>
    )
}