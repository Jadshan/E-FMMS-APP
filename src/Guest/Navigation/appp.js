import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import DrawerNavigator from './Drawer';
import ChatScreen from '../screens/ChatScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Cntmapscreen from '../../screens/CenterMapScreen';
import Blogs from '../../Main/screens2/blog/Blogs';
import CreateBlog from '../../Main/screens2/blog/CreateBlog';
import Blog from '../../Main/screens2/blog/Blog';
//import DrawerNavigator from './DrawerNavigator';

const App = createStackNavigator();


export function AppStack(){

return(
<App.Navigator>
<App.Screen
       name='DrawerNavigator' 
       component= {DrawerNavigator}
       options={{headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
        }}
       />

<App.Screen
      name="Chat"
      component={ChatScreen}
      options={({route}) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
    <App.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <App.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
     <App.Screen
       name="Cntmapscreen"
       component={Cntmapscreen} 
       options={{headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
        }}
       />

      <App.Screen
       name="Blogs"
       component={Blogs}  
       />
       <App.Screen
       name="CreateBlog"
       component={CreateBlog}  
       />
       <App.Screen
       name="Blog"
       component={Blog}  
       />



</App.Navigator>
)

}