import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyProductScreen from '../../screens/Distributor/MyProductsScreen'
import MyProductsDetailsScreen from '../../screens/Distributor/MyProductsDetailsScreen'

const OTNavStack=createNativeStackNavigator()

export default function MyProductsNavStack () {
    return (
      <OTNavStack.Navigator> 
            <OTNavStack.Screen
              name='MyProductScreen'
              component={MyProductScreen}
              options={{headerShown:false}}
            />
            <OTNavStack.Screen
                name='MyProductsDetailsScreen'
                component={MyProductsDetailsScreen}
                options={{headerShown:false}}
            />
      </OTNavStack.Navigator>
    )
  }
