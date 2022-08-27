import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../global/Vendor/Styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import OrderActiveNav from './VendorOrderActiveNavStack';
import OrderCompleteNav from './VendorOrdersComNav';

const bottomTab = createBottomTabNavigator();

export default function VendorOrderBottomNav() {
  return (
    <bottomTab.Navigator
        screenOptions={{
            tabBarActiveTintColor:colors.buttons 
        }}
    >
        <bottomTab.Screen name="ActiveOrders" component={OrderActiveNav}
                options={
                    {
                        tabBarLabel:"Active",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name='cart-arrow-down' 
                                color={color}
                                size={size}
                            />
                        ),
                        headerShown:false
                    }
                }
        />
        <bottomTab.Screen name="CompletedOrders" component={OrderCompleteNav}
            options={
                {
                    tabBarLabel:"Completed",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name='truck' 
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown:false
                }
            }
        />
    </bottomTab.Navigator>
  )
}
