import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import HomeHeader from "../components2/HomeHeader";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Container } from '../styles/FeedStyles';
import PostCard from '../components2/PostCard';
import { Button } from '@rneui/themed';

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../../assets/img/img4.png'),
    postTime: '4 mins ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../../assets/img/img4.png'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../../assets/img/img4.png'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../../assets/img/img4.png'),
    postTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../../assets/img/img4.png'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../../assets/img/img4.png'),
    postTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../../assets/img/img4.png'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../../assets/img/img4.png'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];


export default function Home({navigation}){
    return(
      
  
  <View style ={styles.container1}>
        <HomeHeader navigation={navigation} />
      
<Container>
<View>
  <Button title ="Create an account"
                   
          onPress ={()=>{navigation.navigate("Addpost")}}>

          </Button>

</View>
<FlatList
            data={Posts}
            renderItem={({item}) => <PostCard  item={item} />}
             
           
            keyExtractor={(item) => item.id}
            
            showsVerticalScrollIndicator={false}
          />
</Container>
 
</View>
    )
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    backgroundColor: "white"
    
  },
})















