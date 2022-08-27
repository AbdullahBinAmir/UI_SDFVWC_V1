import React, { useState } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TextInput, Button, TouchableOpacity  } from 'react-native'
import { colors } from '../../global/Vendor/Styles'
import Header from '../../components/Header'
import { paymentHistory } from '../../global/Shopkeeper/UdharKhata'

export default function CreditKhataScreen({navigation}) {
 
    const [data,setData]=useState(paymentHistory)

    const [uType,setUType]=useState('distributor')

    const filterData=(usertype,callback)=>{
        setData(paymentHistory.filter((d)=>d.distributorDetails.userType==usertype))
        callback(usertype)
    }

    return (
        <View style={styles.container}>
            <Header navigate={navigation} title='Shopkeeper' />
            <View style={styles.textBarTab}>
                <Text style={styles.textTop}> Udhar Khata  </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity style={uType=='distributor'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
              onPress={()=>{filterData('distributor',setUType)}}
              >
                <Text style={uType=='distributor'?{...styles.cngDataText,color:colors.cardbackground}:styles.cngDataText}>Distributor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={uType=='vendor'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
                onPress={()=>{filterData('vendor',setUType)}}
              >
              <Text style={uType=='vendor'?{...styles.cngDataText,color:colors.cardbackground}:styles.cngDataText}
              >Vendor</Text>
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
                <View style={{marginRight:10}}>
                <View style={styles.boxStyle}>
                    <View style={{flexDirection:'column'}}>
                        <Image
                        source={{uri:item.distributorDetails.uimage}}  
                        style={styles.imageStyle}
                        />
                        <Text style={styles.textBtnStyles}
                            onPress={()=>{navigation.navigate('CreditDetailsScreen',{data:item})}}
                        >View Payment</Text>
            
                </View>
                    <View style={{marginLeft:7,borderLeftWidth:2,padding:5,borderColor:colors.buttons}}>
                    <Text style={styles.text2}>Name: </Text>
                    <Text style={styles.text1}>{item.distributorDetails.uname}</Text>
                    <Text style={styles.text2}>Mobile Number: </Text>
                    <Text style={styles.text1}>{item.distributorDetails.umobileno}</Text>
                    <Text style={styles.text2}>City: </Text>
                    <Text style={styles.text1}>{item.distributorDetails.ucity}</Text>
                    <Text style={styles.text2}>Amount Remaining: </Text>
                    <Text style={styles.text1}> PKR {item.totalAmountRemaining}</Text>
                </View>
                </View>
                </View>
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
            backgroundColor:colors.cardbackground,
            top:5
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
