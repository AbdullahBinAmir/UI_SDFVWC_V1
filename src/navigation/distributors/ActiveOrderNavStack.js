import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ActiveOrdersScreen from '../../screens/Distributor/ActiveOrdersScreen'
import OrderDetailsScreen from '../../screens/Distributor/OrderDetailsScreen'

const OTNavStack=createNativeStackNavigator()

export default function ActiveOrderNavStack () {
    return (
      <OTNavStack.Navigator>
            <OTNavStack.Screen
              name='ActiveOrdersScreen'
              component={ActiveOrdersScreen}
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
