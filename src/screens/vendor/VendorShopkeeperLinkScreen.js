import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import VendorHeader from '../../components/Vendor/VendorHeader'
import { colors } from '../../global/Vendor/Styles'

export default function VendorShopkeeperLinkScreen({navigation}) {
  return (
    <View style={styles.container}>
        <VendorHeader navigate={navigation} />
        <View style={styles.textBarTab}>
        <Text style={styles.textTop}>Allow Shopkeepers for Search</Text>
        </View>
        <View style={{margin:10}}>
        <Text style={{fontSize:20,color:colors.grey1,textAlign:'justify',letterSpacing:1}}>
          There are main two categories of Vendors. One who have their own 
          distributors and take orders direclty from shopkeepers or kiryana stores.
          Secondly, those who registered some distributors from different areas as you can see
          options in this application as well. So, if you want to allow shopkeepers to search you
          and place orders. You can do this by clicking the allow button below. 
        </Text>
    </View>
    <TouchableOpacity style={{borderWidth:1,borderColor:colors.grey5,backgroundColor:colors.buttons,margin:10,padding:10,width:200,alignSelf:'center'}}>
        <Text style={{fontSize:18,color:colors.cardbackground,textAlign:'center',fontWeight:'bold'}}>Allow</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{borderWidth:1,borderColor:colors.grey5,backgroundColor:'orange',margin:10,padding:10,width:200,alignSelf:'center'}}>
        <Text style={{fontSize:18,color:colors.cardbackground,textAlign:'center',fontWeight:'bold'}}>Block</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
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
    cardText:{
      color:colors.grey2,
      fontSize:18
    }
  })
