import React from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { colors } from '../../global/Vendor/Styles'
import { orderData } from '../../global/Vendor/OrderData'
import PaymentsCard from '../../components/PaymentsCard';

export default function CreditDistributorsPayScreen({route,navigation}) {

    const {data}=route.params;

    return (
      <View style={styles.container}>
        <View style={{...styles.textBarTab,backgroundColor:colors.buttons,margin:10}}>
            <Text style={{...styles.textTop,color:colors.cardbackground}}> Payment History  </Text>
        </View>
        <View style={styles.textBarTab}> 
            <Text style={styles.textTop}> Total Credit: PKR {data.totalCreditTaken}  </Text>
        </View>
        <View style={{flex:1,flexGrow:1}}>
        <FlatList
          style={{marginTop:10,marginBottom:10}}
          horizontal={false}
          showsVerticalScrollIndicator={true}
          data={data.paymentHistory}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('PaymentsOrderTrackScreen',{data:orderData[0]})}> 
              <PaymentsCard data={item} />
            </TouchableOpacity>
          )}
        />
    </View>
      </View>
    )
  }

const styles = StyleSheet.create({
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
      }
})
