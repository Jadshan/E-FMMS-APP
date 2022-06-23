import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    Dimensions,
    StatusBar
  } from 'react-native';
  import { colors,parameters } from '../../global/Styles';
import { Icon, withTheme,Button,SocialIcon,withBadge } from '@rneui/themed';


  export default function Header({navigation}){

    const BadgeIcon = withBadge(0)(Icon)
      return(
        <View style ={styles.header}>
            <View style ={{alignItems:"center",justifyContent:'center',marginLeft:15}}>
            <Icon
            type='material-community'
            name='menu' 
            color="white"
            size ={32}
            onPress ={()=>{
                navigation.toggleDrawer()
            }}
             />
            </View>
            

            
        </View>
      )
  }

  const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.buttons,
        flexDirection: 'row',
        height:27,
        justifyContent: 'space-between',

    }
  })