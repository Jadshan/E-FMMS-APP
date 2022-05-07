import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed';
import { colors } from '../global/Styles';
import RootClientTabs from './Clienttabs';
import Business from '../screens/Businessconsole';
import DrawerContent from '../components/Drawercontent';
import BottamTabs from '../Main/Navigation/Bottamtabs';



const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return (
        <Drawer.Navigator
        drawerContent={props =><DrawerContent {...props} />}
        >

<Drawer.Screen 
              name='BottamTabs'
              component={BottamTabs}
              options={{
                  title:'Home',
                  drawerIcon: ({focused,size}) => (
                      <Icon
                      type='material-community'
                      name='home'
                      color={focused ? '#7cc' :colors.grey}
                      size={size}
                       />
                  )
              }}
          />  



         
          <Drawer.Screen 
              name='RootClientTabs'
              component={RootClientTabs}
              options={{
                  title:'Client',
                  drawerIcon: ({focused,size}) => (
                      <Icon
                      type='material-community'
                      name='home'
                      color={focused ? '#7cc' :colors.grey}
                      size={size}
                       />
                  )
              }}
          />  

           <Drawer.Screen 
              name='Business'
              component={Business}
              options={{
                  title:'Business console',
                  drawerIcon: ({focused,size}) => (
                      <Icon
                      type='material'
                      name='business'
                      color={focused ? '#7cc' :colors.grey}
                      size={size}
                       />
                  )
              }}
          />  
        </Drawer.Navigator>
    )
    
}

{/*
Drawer.Screen 
name='Home'
component={Home}
options={{
    title:'Home',
    drawerIcon: ({focused,size}) => (
        <Icon
        type='material-community'
        name='home'
        color={focused ? '#7cc' :colors.grey}
        size={size}
         />
    )
}}
/>  
*/}