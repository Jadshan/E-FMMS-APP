import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'


import Cntmapscreen from "../screens/CenterMapScreen";

import DrawerNavigator from './DrawerNavigator';
import Addpost from '../Main/screens2/AddPost';

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

</App.Navigator>
)
}