import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import GBottamTabs from './Userbottom';
import { Icon } from '@rneui/themed';
import { colors } from '../../global/Styles';
import RootClientTabs from '../../navigation/Clienttabs';
import GuestBottamTabs from './Guestbottom';
import DrawerContent from '../../components/Drawercontent';
const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return (
        <Drawer.Navigator
        drawerContent={props =><DrawerContent {...props} />}
        >


            <Drawer.Screen 
              name='GBottamTabs'
              component={GBottamTabs}
              options={{
                  title:'Home',
                  drawerIcon: ({focused,size}) => (
                      <Icon
                      type='material-community'
                      name='home'
                      color={focused ? colors.buttons :colors.grey}
                      size={size}
                       />
                  )
              }}
          /> 

          <Drawer.Screen 
              name='Guest'
              component={GuestBottamTabs}
              options={{
                  title:'Guest',
                  drawerIcon: ({focused,size}) => (
                      <Icon
                      type='material-community'
                      name='person'
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
                  title:'Shopping',
                  drawerIcon: ({focused,size}) => (
                      <Icon
                      type='material-community'
            name='cart' 
            
                      color={focused ? '#7cc' :colors.grey}
                      size={size}
                       />
                  )
              }}
          />  

            

        </Drawer.Navigator>
    )
}