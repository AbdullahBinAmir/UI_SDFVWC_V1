import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchSellerNavStack from './SearchSellerNavStack';
import ShopkeeerOrderNavStack from './ShopkeeperOrderNavStack';
import ShopkeeerCreditNavStack from './ShopkeeperCreditNavStack';

const Drawer = createDrawerNavigator();

export default function ShopKeeperDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation 
            screenOptions={{headerShown:false,drawerLabelStyle:{fontSize:16,marginLeft:-15}}}
            drawerContent ={props=> <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Search Sellers" component={SearchSellerNavStack}
                    options={{
                        drawerIcon:({color})=>(
                            <Icon
                            name='user'
                            size={24}
                            color={color}
                            />
                        )
                    }}
            />
            <Drawer.Screen name="Shopkeeer Orders" component={ShopkeeerOrderNavStack}
                    options={{
                        drawerIcon:({color})=>(
                            <Icon
                            name='th-list'
                            size={24}
                            color={color}
                            />
                        )
                    }}
            />
            <Drawer.Screen name="Udhar Khata" component={ShopkeeerCreditNavStack}
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
