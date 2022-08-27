import React from 'react'
//import { View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreditKhataScreen from '../../screens/Distributor/CreditKhataScreen'
import CreditKhataHistoryScreen from '../../screens/Distributor/CreditKhataHistoryScreen'


const vdnavStack=createNativeStackNavigator()

export default function CreditPaymentNavStack() {
    return (
      <vdnavStack.Navigator>
            <vdnavStack.Screen
                name='CreditKhataScreen'
                component={CreditKhataScreen}
                options={{headerShown:false}}
            />
            <vdnavStack.Screen
            name='CreditKhataHistoryScreen'
            component={CreditKhataHistoryScreen}
            options={{headerShown:false}}
        />
      </vdnavStack.Navigator>
    )
  }
