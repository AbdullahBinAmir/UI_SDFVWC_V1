import React, { useEffect } from 'react'
import { View ,StyleSheet ,StatusBar } from 'react-native'
import { colors } from './src/global/Vendor/Styles'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen'
import SignUPScreen from './src/screens/SignUPScreen'
import VendorDrawer from './src/navigation/vendor/VendorDrawer'
import DistributorDrawer from './src/navigation/distributors/DistributorDrawer'
import ShopKeeperDrawer from './src/navigation/shopkeeper/ShoopkeeperDrawer'

const navStack=createNativeStackNavigator()

export default function App() {

  useEffect(()=>{
      setTimeout(
        ()=>{
          SplashScreen.hide()
        },1000
      )
  })

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle= "light-content"
          backgroundColor={colors.statusBar}
        />
        <NavigationContainer>
            <navStack.Navigator>
               <navStack.Screen
                  name='SignInScreen'
                  component={SignInScreen}
                  options={{headerShown:false}}
               />
               <navStack.Screen
                name='SignUpScreen'
                component={SignUPScreen}
                options={{headerShown:false}}
              />
              <navStack.Screen
                name='VendorDrawer'
                component={VendorDrawer}
                options={{headerShown:false}}
              />
              <navStack.Screen
                name='DistributorDrawer'
                component={DistributorDrawer}
                options={{headerShown:false}}
              />
              <navStack.Screen
                name='ShopKeeperDrawer'
                component={ShopKeeperDrawer}
                options={{headerShown:false}}
              />
            </navStack.Navigator>
        </NavigationContainer>
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{flex:1}
})
