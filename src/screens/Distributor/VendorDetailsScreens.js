import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, ScrollView }  from 'react-native'
import { colors } from '../../global/Vendor/Styles';

export default function VendorDetailsScreens({route,navigation}){

    const {data}=route.params;

    return (
     <View style={styles.container}>
      <ScrollView> 
        <View style={styles.titleBar}>
          <Text style={{fontSize:22,fontWeight:'bold',color:colors.cardbackground}}>Vendor Details</Text>
        </View> 
          <View style={styles.textBarTab}>
              <Text style={styles.textTop}> Vendor Info </Text>
          </View>
           <View style={{margin:10,paddingVertical:8,backgroundColor:'#F5F5F5',paddingHorizontal:5,borderRadius:5,borderWidth:1,borderColor:colors.grey5}}>
              <Text style={styles.text2}>Name: {data.uname} </Text>
              <Text style={styles.text2}>Email: {data.uemail}</Text>
              <Text style={styles.text2}>Mobile: {data.umobileno}</Text>
              <Text style={styles.text2}>City: {data.ucity}</Text>
              <Text style={styles.text2}>Address: {data.Address}</Text>
           </View>
           <View style={styles.textBarTab}>
             <Text style={styles.textTop}> Vendor Products</Text>
           </View>
           <View style={{flex:1,flexGrow:1}}>
           <FlatList
             style={{marginTop:10,marginBottom:10}}
             horizontal={true}
             data={data.vendorProducts}
             keyExtractor={(item,index)=>index.toString()}
             renderItem={({item,index})=>(
               <View style={{marginRight:10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('VendorProductsDetails',{data:item})}>
                      <View style={styles.boxStyle}>
                        <Image
                          source={{uri:item.productImage}}  
                          style={styles.imageStyle}
                        />
                        <View style={{marginLeft:5}}>
                          <Text style={styles.text1}>Name: {item.pname}</Text>
                          <Text style={styles.text1}>Qty: {item.no_Of_Carton}</Text>
                          <Text style={styles.text1}>Threshold: {item.thresholdToBuy}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
               </View>
             )}
           />
       </View>
       <View style={{margin:10,marginBottom:15}}>
         <View>
          <Text style={{...styles.text2,padding:10,borderWidth:1,borderRadius:5,borderColor:colors.buttons,color:colors.buttons,margin:5,textAlign:'center',fontWeight:'bold'}}
           onPress={{}}> Apply For Distribution </Text>
         </View>
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
        left:5,
        borderWidth:1,
        borderColor:colors.grey5
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
  
