import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import { colors } from '../global/Vendor/Styles'

export default function VendorProductCard(props,{navigation}) {

    console.log(JSON.stringify(props))

    // const data={
    //         id:pid,prname:pname,qtyCarton:quantityPerCarton,priceCarton:pricePerCarton,nCartons:no_Of_Carton,
    //         ppd:purchasePriceDistributor,spd:salePriceDistributor,threshold:thresholdToBuy,
    //         pcat:productCategory,pdesp:productDescription,pImg:productImage
    // }

    return (
            <View style={{...styles.cardView,width:props.screenWidth}}>
                <View style={{flex:7,borderBottomWidth:2,borderColor:colors.grey4,height:150}}>
                    <Image
                        resizeMode='cover'
                        source={{uri:props.productImage}}
                        style={{flex:1,height:150}}
                    />
                </View>
                <View style={{flex:3,marginLeft:5,marginTop:5,padding:5}}>
                    <Text style={styles.textStyle}>Name: {props.pname}</Text>
                    <Text style={styles.textStyle}>Qty Per Carton: {props.quantityPerCarton}</Text>
                    <Text style={styles.textStyle}>Qty In Stock: {props.no_Of_Carton}</Text>
                    <Text style={{...styles.textStyle,color:colors.buttons,textAlign:'right',right:5}}>details</Text>
                </View>
            </View>
    )
  }

const styles = StyleSheet.create({
    cardView:{
        flex:1,
        borderWidth:1,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:5,
        borderColor:colors.grey4,
        marginLeft:15
    },
    imageView:{
            justifyContent:'center',
            backgroundColor:'#ffff'
    },
    textStyle:{
        color:colors.grey2,
        fontSize:16
    }
})
