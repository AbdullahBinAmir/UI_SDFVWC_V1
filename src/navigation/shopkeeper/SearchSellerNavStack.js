import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShopKeeperSearchDashboardScreen from '../../screens/shopkeeper/ShopKeeperSearchDashboardScreen'
import SearchedProductsListScreen from '../../screens/shopkeeper/SearchedProductsListScreen'
import SearchedProductsDetailsScreen from '../../screens/shopkeeper/SearchedProductsDetailsScreen'
import PlaceAnOrderScreen from '../../screens/shopkeeper/PlaceAnOrderScreen'
import CheckoutScreen from '../../screens/shopkeeper/CheckoutScreen'

const SSNavStack=createNativeStackNavigator()

export default function SearchSellerNavStack () {
    return (
      <SSNavStack.Navigator> 
            <SSNavStack.Screen
              name='ShopKeeperSearchDashboardScreen'
              component={ShopKeeperSearchDashboardScreen}
              options={{headerShown:false}}
            />
            <SSNavStack.Screen
                name='SearchedProductsListScreen'
                component={SearchedProductsListScreen}
                options={{headerShown:false}}
            />
            <SSNavStack.Screen
                name='SearchedProductsDetailsScreen'
                component={SearchedProductsDetailsScreen}
                options={{headerShown:false}}
            />
            <SSNavStack.Screen
                name='PlaceAnOrderScreen'
                component={PlaceAnOrderScreen}
                options={{headerShown:false}}
            />  
            <SSNavStack.Screen
              name='CheckoutScreen'
              component={CheckoutScreen}
              options={{headerShown:false}}
            />            
      </SSNavStack.Navigator>
    )
  }
