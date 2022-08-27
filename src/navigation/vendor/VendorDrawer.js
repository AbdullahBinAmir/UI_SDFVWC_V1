import React from 'react';
//import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VendorProductsBottomNav from './VendorProductsBottomNav';
import  DrawerContent from '../../components/DrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome'
import VendorDistrbutorNav from './VendorDistrbutorNav';
import VendorOrderBottomNav from './VendorOrderBottomNav';
import VendorCreditNav from './VendorCreditNav';
//import VendorShopkeeperLinkScreen from '../../screens/Vendor/VendorShopkeeperLinkScreen';



const Drawer = createDrawerNavigator();
export default function VendorDrawer({route}) {
  const {data}=route.params
  console.log(data)
  return (
    <Drawer.Navigator useLegacyImplementation 
       screenOptions={{headerShown:false,drawerLabelStyle:{fontSize:16,marginLeft:-15}}}
       drawerContent ={props=> <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Manage Products" component={VendorProductsBottomNav}
            initialParams={{data:data}}
            options={{
                drawerIcon:({color})=>(
                    <Icon
                      name='product-hunt'
                      size={24}
                      color={color}
                    />
                )
            }}
      />
      <Drawer.Screen name="Distributors" component={VendorDistrbutorNav}
            options={{
                drawerIcon:({color})=>(
                    <Icon
                      name='users'
                      size={24}
                      color={color}
                    />
                )
            }}
      />
      <Drawer.Screen name="Orders" component={VendorOrderBottomNav}
              options={{
                  drawerIcon:({color})=>(
                      <Icon
                        name='list-alt'
                        size={24}
                        color={color}
                      />
                  )
              }}
        />
        <Drawer.Screen name="Credit Management" component={VendorCreditNav}
            options={{
                drawerIcon:({color})=>(
                    <Icon
                      name='credit-card'
                      size={24}
                      color={color}
                    />
                )
            }}
      />
    </Drawer.Navigator>
  );
}