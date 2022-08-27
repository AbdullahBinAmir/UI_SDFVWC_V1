import React from 'react'
import { Text, View, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../global/Vendor/Styles';
import { myVendorsList } from '../../global/Distributor/MyVendors';
import UserInfoCard from '../../components/UserInfoCard';

export default function MyVendorScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigate={navigation} title='Distributor' />
    <View style={styles.textBarTab}> 
      <Text style={styles.textTop}>My Vendors List</Text>
    </View>
    <View style={{flex:1,flexGrow:1}}>
      <FlatList
        style={{marginTop:10,marginBottom:10}}   
        horizontal={false}
        showsVerticalScrollIndicator={true}
        data={myVendorsList}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('VendorPlaceOrderScreen',{data:item})}>
              <UserInfoCard item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  </View>
  )
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:colors.cardbackground
  },
  textTop:{
      fontSize:20,
      fontWeight:'bold',
      color:colors.buttons
  },
  textBarTab:{
      alignItems:'flex-start',
      justifyContent:'center',
      marginLeft:5,
      marginTop:15,
      marginBottom:10,
      height:50,
      backgroundColor:colors.grey5,
      padding:10,
      borderRadius:10
  },
  imgStyle:{
    width:60,
    height:50,
    borderRadius:25
  },
  cardText:{
    color:colors.grey2,
    fontSize:18
  }
})
