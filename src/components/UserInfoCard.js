import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { colors } from '../global/Vendor/Styles';

export default function UserInfoCard(props) {
    const item=props.item
  return (
            <View style={{borderWidth:1,flexDirection:'row',margin:10,backgroundColor:'#F5F5F5',borderRadius:10,borderColor:colors.grey5}}>
              <Image source={{uri:item.uimage}}
                style={{width:100,height:100,borderRadius:50,margin:10,borderWidth:1,borderColor:colors.grey2}}
              />
              <View style={{marginTop:10,paddingHorizontal:5,paddingVertical:5}}>
                <Text style={styles.cardText}>Name: {item.uname}</Text>
                <Text style={styles.cardText}>Mobile No: {item.umobileno}</Text>
                <Text style={styles.cardText}>City: {item.ucity}</Text>
                <View>
                  <Text style={{fontSize:18,alignSelf:'flex-end',marginRight:5,color:colors.buttons,marginTop:5}}>Details</Text>
                </View>
              </View>
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
  imgStyle:{
    width:60,
    height:50,
    borderRadius:25
  },
  cardText:{
    color:colors.grey2,
    fontSize:18
  }
})
