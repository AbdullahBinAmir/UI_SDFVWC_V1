import React from 'react'
//import { View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import VendorDistributorsScreen from '../../screens/vendor/VendorDistributorsScreen'
//import VendorDistributorsCard from '../../components/Vendor/VendorDistributorsCard'
import DistributorsDetails from '../../screens/vendor/DistributorsDetails'

const vdnavStack=createNativeStackNavigator()

export default function VendorDistrbutorNav () {
    return (
      <vdnavStack.Navigator>
            <vdnavStack.Screen
                name='VendorDistributorsScreen'
                component={VendorDistributorsScreen}
                options={{headerShown:false}}
            />
            <vdnavStack.Screen
                name='DistributorsDetails'
                component={DistributorsDetails}
                options={{headerShown:false}}
             />
      </vdnavStack.Navigator>
    )
  }
