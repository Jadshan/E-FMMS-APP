import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'


import Cntmapscreen from "../screens/CenterMapScreen";

import DrawerNavigator from './DrawerNavigator';
import Addpost from '../Main/screens2/AddPost';
import GetNews from '../Main/screens2/GetNews';
import WebViewComponent from '../Main/component3/WevView';
import Reading from '../Main/screens/Blogs';
import News from '../Main/screens2/News';
import Blogs from '../Main/screens2/blog/Blogs'
import CreateBlog from '../Main/screens2/blog/CreateBlog';
import Blog from '../Main/screens2/blog/Blog';


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
       name="Cntmapscreen"
       component={Cntmapscreen} 
       options={{headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
        }}
       />
       <App.Screen
       name="Addpost"
       component={Addpost} 
       options={{headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
        }}
       />
        <App.Screen
       name="Trending"
       component={News} 
       
       />
        <App.Screen
       name="GetNews"
       component={GetNews} 
       
       
       />
       <App.Screen
       name="WebView"
       component={WebViewComponent} 
      options={{ headerShown:false}}
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