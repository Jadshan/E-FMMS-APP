import React ,{useState} from 'react';
import {View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet, } from 'react-native';

    export default function Business(){
        return(
            <View style = {styles.container}>
                <Text>Welcome to Business console</Text>
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:"center"
        }
    })