import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyVendorScreen from '../../screens/Distributor/MyVendorScreen'
import VendorPlaceOrderScreen from '../../screens/Distributor/VendorPlaceOrderScreen'
import VendorProductsDetails from '../../screens/Distributor/VendorProductsDetails'
import VendorCheckoutScreen from '../../screens/Distributor/VendorCheckoutScreen'

const myVNavStack=createNativeStackNavigator()

export default function MyVendorsNavStack () {
    return (
      <myVNavStack.Navigator>
            <myVNavStack.Screen
              name='MyVendorScreen' 
              component={MyVendorScreen}
              options={{headerShown:false}}
            />
            <myVNavStack.Screen
              name='VendorPlaceOrderScreen'
              component={VendorPlaceOrderScreen}
              options={{headerShown:false}}
            />
            <myVNavStack.Screen
              name='VendorProductsDetails'
              component={VendorProductsDetails}
              options={{headerShown:false}}
            />
            <myVNavStack.Screen
              name='VendorCheckoutScreen'
              component={VendorCheckoutScreen}
              options={{headerShown:false}}
            />
      </myVNavStack.Navigator>
    )
  }
