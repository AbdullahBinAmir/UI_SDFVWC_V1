import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../global/Vendor/Styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import ActiveOrderNavStack from './ActiveOrderNavStack';
import CompletedOrderNavStack from './CompletedOrderNavStack';

const bottomTab = createBottomTabNavigator();

export default function OrderBottomNav() {
  return (
    <bottomTab.Navigator 
        screenOptions={{
            tabBarActiveTintColor:colors.buttons
        }}
    >
        <bottomTab.Screen name="ActiveOrders" component={ActiveOrderNavStack}
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
        <bottomTab.Screen name="CompletedOrders" component={CompletedOrderNavStack}
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
