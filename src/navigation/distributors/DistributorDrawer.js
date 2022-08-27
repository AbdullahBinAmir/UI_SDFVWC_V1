import React from 'react'
//import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome'
import VendorListNavStack from './VendorListNavStack';
import MyVendorsNavStack from './MyVendorsNavStack';
import OrderBottomNav from './OrderBottomNav';
import CreditPaymentNavStack from './PaymentNavStack';
import MyProductsNavStack from './MyProductsNavStack';

const Drawer = createDrawerNavigator();

export default function DistributorDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation 
            screenOptions={{headerShown:false,drawerLabelStyle:{fontSize:16,marginLeft:-15}}}
            drawerContent ={props=> <DrawerContent {...props} />}
        >
        <Drawer.Screen name="Vendors" component={VendorListNavStack}
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
        <Drawer.Screen name="My Products" component={MyProductsNavStack}
                options={{
                    drawerIcon:({color})=>(
                        <Icon
                        name='list-ul'
                        size={24}
                        color={color}
                        />
                    )
                }}
        />
        <Drawer.Screen name="My Vendors" component={MyVendorsNavStack}
                options={{
                    drawerIcon:({color})=>(
                        <Icon
                        name='user-circle'
                        size={24}
                        color={color}
                        />
                    )
                }}
        />
        <Drawer.Screen name="Orders" component={OrderBottomNav}
                options={{
                    drawerIcon:({color})=>(
                        <Icon
                        name='folder-open'
                        size={24}
                        color={color}
                        />
                    )
                }}
        />
        <Drawer.Screen name="Credit Management" component={CreditPaymentNavStack}
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
    )
  }
