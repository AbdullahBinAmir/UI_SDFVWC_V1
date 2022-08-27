import React, {useState} from 'react'
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity  } from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../global/Vendor/Styles'
import { orderData } from '../../global/Vendor/OrderData'
import { shopKeeperOrderData } from '../../global/Vendor/ShopkeeperOrdersData'
import UserInfoCard from '../../components/UserInfoCard'


export default function OrdersScreen({navigation}) {

  const [data,setData]=useState(orderData)

    return (
      <View style={styles.container}>
        <Header navigate={navigation} title='Vendor' />
        <View style={styles.textBarTab}>
            <Text style={styles.textTop}>My Orders</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={data[0].distributorDetails.userType=='distributor'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
          onPress={()=>setData(orderData)}
          >
            <Text style={data[0].distributorDetails.userType=='distributor'?{...styles.cngDataText,color:colors.cardbackground}:styles.cngDataText}>Distributor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={data[0].distributorDetails.userType=='shopkeeper'?{...styles.cngDataView,backgroundColor:colors.buttons}:styles.cngDataView}
            onPress={()=>setData(shopKeeperOrderData)}
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
                <View style={{marginRight:10}}>
                  {
                    item.oStatus=='complete'?(
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetailsScreen',{data:item})}>
                          <UserInfoCard item={item.distributorDetails} />
                      </TouchableOpacity>):null
                  }
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
      borderWidth:2,
      margin:10,
      paddingHorizontal:5,
      paddingVertical:10,
      borderColor:colors.buttons,
      borderRadius:10
    },
    text1:{
      fontSize:14,
      color:colors.grey1
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
