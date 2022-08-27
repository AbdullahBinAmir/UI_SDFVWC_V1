import React from 'react'
//import { View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import VendorListScreen from '../../screens/Distributor/VendorListScreen'
import VendorDetailsScreens from '../../screens/Distributor/VendorDetailsScreens'
import VendorProductsDetails from '../../screens/Distributor/VendorProductsDetails'

const vLNavStack=createNativeStackNavigator()

export default function VendorListNavStack () {
    return (
      <vLNavStack.Navigator>
            <vLNavStack.Screen
                name='VendorListScreen'
                component={VendorListScreen}
                options={{headerShown:false}}
            />
            <vLNavStack.Screen
              name='VendorDetailsScreens'
              component={VendorDetailsScreens}
              options={{headerShown:false}}
            />
            <vLNavStack.Screen
              name='VendorProductsDetails'
              component={VendorProductsDetails}
              options={{headerShown:false}}
          />
      </vLNavStack.Navigator>
    )
  }
