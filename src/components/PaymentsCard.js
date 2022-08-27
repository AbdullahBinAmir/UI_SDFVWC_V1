import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../global/Vendor/Styles'

export default function PaymentsCard(props) {

    const item=props.data

    return (
        <View style={styles.boxStyle}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text2}>Amount Paid: </Text>
                <Text style={styles.text1}> PKR {item.amountPaid}</Text>
            </View>
            <View style={{flexDirection:'row',padding:5}}>
                <Text style={styles.text2}>Paid Date: </Text>
                <Text style={styles.text1}>{item.payDate}</Text>
            </View>        
        </View>
    )
  }

  const styles = StyleSheet.create({
      boxStyle:{
        marginRight:10,
        margin:10,
        justifyContent:'center',
        paddingHorizontal:15,
        borderWidth:2,
        paddingVertical:10,
        borderColor:colors.grey4,
        borderRadius:10,
        backgroundColor:colors.grey5,
        paddingVertical:20
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
      }
})

