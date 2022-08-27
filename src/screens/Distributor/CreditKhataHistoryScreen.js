import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import PaymentsCard from '../../components/PaymentsCard';
import { colors } from '../../global/Vendor/Styles';

export default function CreditKhataHistoryScreen({route,navigation}) {

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
            <PaymentsCard data={item} />
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
      boxStyle:{
        marginRight:10,
        margin:10,
        justifyContent:'center',
        paddingHorizontal:15,
        borderWidth:2,
        paddingVertical:10,
        borderColor:colors.buttons,
        borderRadius:10
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
