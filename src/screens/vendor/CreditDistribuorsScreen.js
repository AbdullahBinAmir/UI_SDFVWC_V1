import React, { useState } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TextInput, Button, TouchableOpacity  } from 'react-native'
import { paymentVD } from '../../global/Vendor/PaymentVendorDistributorData'
import { skPaymentSD } from '../../global/Vendor/ShopKeeperPaymentData'
import { colors } from '../../global/Vendor/Styles'
import Header from '../../components/Header'
//import Modal from "react-native-modal";
import CreditInfoCard from '../../components/CreditInfoCard'

export default function CreditDistributorsScreen({navigation}) {
 
    const [data,setData]=useState(paymentVD)

    return (
        <View style={styles.container}>
            <Header navigate={navigation} title='Vendor' />
            <View style={styles.textBarTab}>
                <Text style={styles.textTop}> Users At Udhar  </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={data[0].distributorDetails.userType=='distributor'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
              onPress={()=>setData(paymentVD)}
              >
                <Text style={data[0].distributorDetails.userType=='distributor'?{...styles.cngDataText,color:colors.cardbackground}:styles.cngDataText}>Distributor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={data[0].distributorDetails.userType=='shopkeeper'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
                onPress={()=>setData(skPaymentSD)}
              >
              <Text style={data[0].distributorDetails.userType=='shopkeeper'?{...styles.cngDataText,color:colors.cardbackground}:styles.cngDataText}
              >ShopKeeper</Text>
          </TouchableOpacity>
          </View>
            <View style={{flex:1,flexGrow:1}}>
            <FlatList
              style={{marginTop:10,marginBottom:10}}
              horizontal={false}
              showsVerticalScrollIndicator={true}
              data={data}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item})=>(
                  <CreditInfoCard item={item} navigate={()=>{navigation.navigate('CreditDistributorsPayScreen',{data:item})}} />
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
      },
      titleBar:{
        width:'100%',
        height:80,
        backgroundColor:colors.buttons,
        alignItems:'center',
        justifyContent:'center'
      },
        imageStyle:{
          width:80,
          height:80,
          borderRadius:40,
          borderColor:colors.grey1,
          borderWidth:1,
          marginRight:5
        },
        boxStyle:{
          flexDirection:'row',
          margin:10,
          paddingHorizontal:5,
          paddingVertical:10,
          backgroundColor:'#F5F5F5',
          borderRadius:10,
          left:5
        },
        text1:{
          fontSize:16,
          color:colors.grey1,
          paddingHorizontal:5
        },
        text2:{
          fontSize:16,
          color:colors.grey1,
          fontWeight:'bold',
          fontStyle:'italic'
        },
        textBtnStyles:{
            height:50,width:80,
            borderWidth:1,
            borderColor:colors.buttons,
            padding:5,margin:5,
            textAlign:'center',
            borderRadius:10,
            color:colors.grey1,
            fontWeight:'bold',
            backgroundColor:colors.cardbackground
        },
        modalView1:{
            flex: .8,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:colors.grey5,
            borderRadius:30,
            paddingHorizontal:10
       },
       cngDataView:{
           margin:10,
           backgroundColor:colors.grey5,
           padding:10,
           borderRadius:10,
           minWidth:100
       },
       cngDataText:{
           color:colors.buttons,
           fontSize:18,
           fontWeight:'bold',
           textAlign:'center'
       }
})
