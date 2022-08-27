import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import OrderInfoCard from '../../components/OrderInfoCard';
import { colors } from '../../global/Vendor/Styles'

export default function OrderDetailsScreen({route,navigation,track}) { 

  // let dtrack=track
  // let {navdata}=route.params;

  const {data}=track?track:route.params;
  

  const calculateBill=(data)=>{
     const items=data.productsOrdered;
     let bill=0;
     for (let i=0;i<items.length;i++){
        bill+=items[i].purchasePriceDistributor*items[i].qty_Ordered;
     }
     return bill;
  }

  console.log(JSON.stringify(data.completionDate))
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
          <Text style={{fontSize:22,fontWeight:'bold',color:colors.cardbackground}}>Order Details</Text>
        </View> 
          <View style={styles.textBarTab}>
              <Text style={styles.textTop}> User Info </Text>
          </View>
           <View style={{margin:10,paddingVertical:8,backgroundColor:'#F5F5F5',paddingHorizontal:5,borderRadius:5}}>
              <Text style={styles.text2}>Name: {data.distributorDetails.uname} </Text>
              <Text style={styles.text2}>Email: {data.distributorDetails.uemail}</Text>
              <Text style={styles.text2}>Mobile: {data.distributorDetails.umobileno}</Text>
              <Text style={styles.text2}>Payment Type: {data.paymentType}</Text>
              <Text style={styles.text2}>Start Date: {data.odate}</Text>
              <Text style={styles.text2}>End Date: {data.completionDate?data.completionDate:'Not Completed'}</Text>
           </View>
           <View style={styles.textBarTab}>
             <Text style={styles.textTop}> Products Odered </Text>
           </View>
           <View style={{flex:1,flexGrow:1}}>
           <FlatList
             style={{marginTop:10,marginBottom:10}}
             horizontal={true}
             data={data.productsOrdered}
             keyExtractor={(item,index)=>index.toString()}
             renderItem={({item,index})=>(
               <View style={{marginRight:10}}>
                  <OrderInfoCard item={item} />
               </View>
             )}
           />
       </View>
       <View style={styles.textBarTab}>
        <Text style={styles.textTop}> Payments Info </Text>
       </View>
       <View style={{margin:10,marginBottom:15}}>
          <Text style={styles.text2}>Security Amount Paid: PKR {data.distributorDetails.securityAmountPaid}</Text>
          <Text style={styles.text2}>Total Bill: PKR {calculateBill(data)}</Text>
          {
            data.oStatus!='complete'?(
              <View>
          <Text style={{...styles.text2,padding:10,borderWidth:1,borderRadius:5,borderColor:colors.buttons,color:colors.buttons,margin:5,textAlign:'center'}}
           onPress={()=>{
            if(data.distributorDetails.securityAmountPaid<calculateBill(data)){
               alert('Distributor is not eligible for credit')
            }
            else
            console.log('Change Payment Type')}}> 
           Change Payment Type to Credit</Text>
          <Text style={{...styles.text2,padding:10,borderWidth:1,borderRadius:5,borderColor:colors.buttons,color:colors.buttons,margin:5,textAlign:'center'}}
              onPress={()=>{
                data.oStatus=='complete'?alert('Already Completed'):
                console.log('Mark as Complete')}}  
              > Mark as Completed</Text>
              </View>):null
          }
       </View>
      </ScrollView>
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
      fontSize:14,
      color:colors.grey1
    },
    text2:{
      fontSize:16,
      color:colors.grey1,
      padding:5
    }
})
