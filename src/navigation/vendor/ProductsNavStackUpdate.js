import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from '../../screens/vendor/ProductScreen'
//import VendorProductCard from '../../components/Vendor/VendorProductCard'
import ProductsManagerScreen from '../../screens/vendor/ProductsManagerScreen'

const odnavStack=createNativeStackNavigator()

export default function ProductUpdateNavStack({route}) {
  const {data}=route.params
    return (
      <odnavStack.Navigator>
            <odnavStack.Screen
                name='ProductScreen'
                component={ProductScreen}
                 initialParams={{data:data}}
                options={{headerShown:false}}
            />
            <odnavStack.Screen
                name='ProductsManagerScreen'
                component={ProductsManagerScreen}
                options={{headerShown:false}}
            />
      </odnavStack.Navigator>
    )
  }
