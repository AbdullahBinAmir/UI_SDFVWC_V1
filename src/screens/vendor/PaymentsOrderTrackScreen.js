import React from 'react'
import { Text, View } from 'react-native'
import OrderDetailsScreen from './OrderDetailsScreen'

export default function PaymentsOrderTrackScreen({route}) {
    const {data}=route.params;
    console.log(data)
      if(data!=null){
        return(
            <OrderDetailsScreen track={route.params} />
        )
      }
      else{
        return(
            <View>
             <Text> You Have Khata </Text>
            </View>
        )
      }
    
  }
