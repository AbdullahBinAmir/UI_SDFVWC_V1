import React,{useState} from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity  } from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../global/Vendor/Styles'
import UserInfoCard from '../../components/UserInfoCard'
import { orderData } from '../../global/Shopkeeper/OrderData'
//import {useNavigationState} from '@react-navigation/native';


export default function ShopkeeperOrdersScreen({navigation}) {

  const [data,setData]=useState(orderData)
  const [orderType,setOrderType]=useState('active')

  const filterData=(sType,callback)=>{
     setData(orderData.filter((d)=>d.oStatus==sType))
     callback(sType)
  }

    return (
      <View style={styles.container}>
        <Header navigate={navigation} title='Shopkeeper' />
        <View style={styles.textBarTab}>
            <Text style={styles.textTop}>My Orders</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={orderType=='active'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
          onPress={()=>{filterData('active',setOrderType)}}
          >
            <Text style={orderType=='active'?{...styles.cngDataText,color:colors.cardbackground}:styles.cngDataText}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={orderType=='completed'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
            onPress={()=>{filterData('completed',setOrderType)}}
          >
          <Text style={orderType=='completed'?{...styles.cngDataText,color:colors.cardbackground}:styles.cngDataText}
          >Completed</Text>
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
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetailsScreen',{data:item})}>
                          <UserInfoCard item={item.distributorDetails} />
                      </TouchableOpacity>
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
