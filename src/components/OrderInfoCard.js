import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { colors } from '../global/Vendor/Styles'

export default function OrderInfoCard(props){
    const item=props.item
    return (
        <View style={styles.boxStyle}>
        <Image
          source={{uri:item.productImage}}  
          style={styles.imageStyle}
        />
        <View style={{marginLeft:5}}>
          <Text style={styles.text1}>Name: {item.pname}</Text>
          <Text style={styles.text1}>Qty: {item.qty_Ordered}</Text>
          <Text style={styles.text1}>Amount: PKR {item.purchasePriceDistributor*item.qty_Ordered}</Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
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
  
