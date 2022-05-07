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


  export default function HomeHeader({navigation}){

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
            <View style={{alignItems:"center",justifyContent:'center'}}>
              <Text style={{color:"white",fontSize:25,fontWeight:'bold',marginRight:150}}>
               E_FMMS </Text>
            </View>

            <View style={{alignItems:"center",justifyContent:'center', marginRight: 10}}>
              <BadgeIcon
              type ="material-community"
              name ="cart"
              size ={35}
              color="white"
              onPress ={()=>{
                navigation.navigate("RootClientTabs")
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
        height:parameters.headerHeight,
        justifyContent: 'space-between'
    }
  })