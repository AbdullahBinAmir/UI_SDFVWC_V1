import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShopkeeperOrdersScreen from '../../screens/shopkeeper/ShopkeeperOrdersScreen'
import OrderDetailsScreen from '../../screens/shopkeeper/OrderDetailsScreen'

const SSNavStack=createNativeStackNavigator()

export default function ShopkeeerOrderNavStack () {
    return (
      <SSNavStack.Navigator> 
            <SSNavStack.Screen
              name='ShopkeeperOrdersScreen'
              component={ShopkeeperOrdersScreen}
              options={{headerShown:false}}
            />
            <SSNavStack.Screen
                name='OrderDetailsScreen'
                component={OrderDetailsScreen}
                options={{headerShown:false}}
            />          
      </SSNavStack.Navigator>
    )
  }
