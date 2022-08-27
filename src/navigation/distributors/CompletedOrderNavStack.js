import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderDetailsScreen from '../../screens/Distributor/OrderDetailsScreen'
import CompletedOrdersScreen from '../../screens/Distributor/CompletedOrdersScreen'

const OTNavStack=createNativeStackNavigator()

export default function CompletedOrderNavStack () {
    return (
      <OTNavStack.Navigator>
            <OTNavStack.Screen
              name='CompletedOrdersScreen'
              component={CompletedOrdersScreen}
              options={{headerShown:false}}
            />
            <OTNavStack.Screen
                name='OrderDetailsScreen'
                component={OrderDetailsScreen}
                options={{headerShown:false}}
            />
      </OTNavStack.Navigator>
    )
  }
