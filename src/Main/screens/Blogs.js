import React, {Component} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Button } from '@rneui/themed';
import Header from '../../Guest/components/Header';


const deviceWidth = Dimensions.get('window').width;

export default function Reading({navigation}){
    return(
        <View>
        <Header navigation={navigation} />
<View>
<Button title ="News"                   
   /* onPress ={()=>{navigation.navigate("Trending")}}>*/
  > </Button>
  
</View>
<View>
<Button title ="Blogs"                   
    onPress ={()=>{navigation.navigate("Blogs")}}>
   </Button>
   <View>
<Button title ="Videoclips"                   
    onPress ={()=>{navigation.navigate("Blogs")}}>
   </Button>
   </View>
</View>
</View>
    )
        
    
}