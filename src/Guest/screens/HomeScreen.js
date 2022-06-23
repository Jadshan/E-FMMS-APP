import React, {useEffect, useState,useContext} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  SkeletonPlaceholder
} from 'react-native';
//import HomeHeader from "../components2/HomeHeader";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container } from '../styles/FeedStyles';
import PostCard from '../components/PostCard';
import { Button } from '@rneui/themed';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { SignInContext } from '../../contexts/authContext';
import auth from '@react-native-firebase/auth';
import HomeHeader from '../../Main/components2/HomeHeader';

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
  




    export default function HomeScreen({navigation}){

        const {dispatchSignedIn} = useContext(SignInContext)

        async function signOut(){
           
            try{
                auth()
                .signOut()
                .then(
                    ()=>{console.log("USER SUCCESSFULLY SIGNED OUT")
                    dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
                })
        
            }catch(error){
                Alert.alert(error.code)
            }
        }

        const [posts, setPosts] = useState(null);
        const [loading, setLoading] = useState(true);
       const [deleted, setDeleted] = useState(false);
        
       const fetchPosts = async () => {
        try {
          const list = [];
            
                  await firestore()
                    .collection('posts')
                    //.orderBy('postTime', 'desc')
                    .get()
                    .then((querySnapshot) => {
                      //console.log('Total Posts: ', querySnapshot.size);
                
                      querySnapshot.forEach((doc) => {
                        const {
                          userId,
                          post,
                          postImg,
                          postTime,
                          likes,
                          comments,
                        } = doc.data();
                        list.push({
                          id: doc.id,
                          userId,
                          userName: 'hey',
                          userImg:
                          require('../../../assets/img/img4.png'),
                          postTime: postTime,
                          post,
                          postImg,
                          liked: false,
                          likes,
                          comments,
                        });
                      });
                    });

                      setPosts(list);

                      if (loading) {
                        setLoading(false);
                      }

                      console.log('Posts: ', posts);
                    } catch (e) {
                        console.log(e);
                      }
                    };
                  
                    useEffect(() => {
                      fetchPosts();
                    }, []);
                  
                    useEffect(() => {
                      fetchPosts();
                      setDeleted(false);
                    }, [deleted]);
                  
                    const handleDelete = (postId) => {
                      Alert.alert(
                        'Delete post',
                        'Are you sure?',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed!'),
                            style: 'cancel',
                          },
                          {
                            text: 'Confirm',
                            onPress: () => deletePost(postId),
                          },
                        ],
                        {cancelable: false},
                      );
                    };
                  
            
            const deletePost = (postId) => {
                console.log('Current Post Id: ', postId);
            
                firestore()
                  .collection('posts')
                  .doc(postId)
                  .get()
                  .then((documentSnapshot) => {
                    if (documentSnapshot.exists) {
                      const {postImg} = documentSnapshot.data();
            
                      if (postImg != null) {
                        const storageRef = storage().refFromURL(postImg);
                        const imageRef = storage().ref(storageRef.fullPath);
            
                        imageRef
                          .delete()
                          .then(() => {
                            console.log(`${postImg} has been deleted successfully.`);
                            deleteFirestoreData(postId);
                          })
                          .catch((e) => {
                            console.log('Error while deleting the image. ', e);
                          });
                        // If the post image is not available
                      } else {
                        deleteFirestoreData(postId);
                      }
                    }
                  });
              };
              const deleteFirestoreData = (postId) => {
                firestore()
                  .collection('posts')
                  .doc(postId)
                  .delete()
                  .then(() => {
                    Alert.alert(
                      'Post deleted!',
                      'Your post has been deleted successfully!',
                    );
                    setDeleted(true);
                  })
                  .catch((e) => console.log('Error deleting posst.', e));
              };
            
              const ListHeader = () => {
                return null;
              }

        
        return (
           
               
             <View  >
            <HomeHeader navigation={navigation} />
             <Container>
              <FlatList
            data={posts}
            renderItem={({item}) => (
              <PostCard
                item={item}
                onDelete={handleDelete}
                onPress={() =>
                  navigation.navigate('HomeProfile', {userId: item.userId})
                }
              />
            )}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListHeader}
            showsVerticalScrollIndicator={false}
          />
        </Container>
        </View>
        
                
           
        )
    }