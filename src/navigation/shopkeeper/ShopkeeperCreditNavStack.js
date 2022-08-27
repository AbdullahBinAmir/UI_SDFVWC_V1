import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreditKhataScreen from '../../screens/shopkeeper/ShopkeeperCreditScreen'
import CreditDetailsScreen from '../../screens/shopkeeper/CreditDetailsScreen'

const SSNavStack=createNativeStackNavigator()

export default function ShopkeeerCreditNavStack () {
    return (
      <SSNavStack.Navigator> 
            <SSNavStack.Screen
              name='CreditKhataScreen'
              component={CreditKhataScreen}
              options={{headerShown:false}}
            />
            <SSNavStack.Screen
                name='CreditDetailsScreen'
                component={CreditDetailsScreen}
                options={{headerShown:false}}
            />          
      </SSNavStack.Navigator>
    )
  }
