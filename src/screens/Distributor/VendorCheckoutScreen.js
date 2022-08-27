import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, } from 'react-native'
import { colors } from '../../global/Vendor/Styles';

export default function VendorCheckoutScreen({route,navigation}) {

  const {data}=route.params;

  return (
    <View style={styles.container}>
    <View style={styles.titleBar}>
      <Text style={{fontSize:22,fontWeight:'bold',color:colors.cardbackground}}>Checkout Screen</Text>
    </View> 
       <View style={styles.textBarTab}>
         <Text style={styles.textTop}>Products Selected</Text>
       </View>
       <View style={{flex:.7,flexGrow:1}}>
       <FlatList
         style={{marginTop:10,marginBottom:10}}
         horizontal={false}
         showsVerticalScrollIndicator={false}   
         data={data}
         keyExtractor={(item,index)=>index.toString()}
         renderItem={({item,index})=>(
           <View style={{marginRight:10}}>
                    <View style={styles.boxStyle}>
                        <Image
                            source={{uri:item.productImage}}  
                            style={styles.imageStyle} 
                       />
                       <View style={{marginLeft:5,marginTop:5}}>
                         <Text style={styles.text1}>Name: {item.pname}</Text>
                         <Text style={styles.text1}>Price: {item.purchasePriceDistributor}</Text>
                         <Text style={styles.text1}>ThresholdToBuy: {item.thresholdToBuy}</Text>
                         <Text style={styles.text1}>Quantity Ordered: {item.qtyOdered}</Text>
                       </View>
                     </View>
           </View>
         )}
       />
   </View>
   <View style={{flex:.3,marginTop:10,marginBottom:25,height:50}}>
       <TouchableOpacity style={{backgroundColor:colors.buttons,padding:5,margin:10,borderRadius:10,paddingVertical:10}}>
          <Text style={{color:colors.cardbackground,fontSize:18,fontWeight:'bold',textAlign:'center'}}>Place Order</Text>
       </TouchableOpacity>
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
  justifyContent:'space-around',
  flexDirection:'row',
  paddingLeft:10,
  paddingRight:10
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
    left:5,
    borderWidth:1,
    borderColor:colors.grey5
  },
  text1:{
    fontSize:16,
    color:colors.grey1
  },
  text2:{
    fontSize:18,
    color:colors.grey1,
    padding:5
  }
})
