import React from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import { colors } from '../../global/Vendor/Styles';

export default function SearchedProductsDetailsScreen({route,navigation}) {

    const {data}=route.params;
    console.log(data)

    return (
        <ScrollView style={styles.container}>
        <View style={styles.titleBar}>
            <Text style={styles.titleBarText}>Products Details</Text>
        </View>
        <View style={styles.view2}>
        <View style={{alignItems:'center'}}>
            <Image
                source={{uri:data.productImage}}  
                style={{width: 160, height: 160, borderRadius: 80, borderColor:colors.grey2, borderWidth:1,marginRight:5}} 
            />
        </View>   
            <View>
                <Text style={styles.text1}>Name: {data.pname}</Text>
                <Text style={styles.text1}>Quantity Per Carton: {data.quantityPerCarton}</Text>
                <Text style={styles.text1}>Customer/Cotton Price: PKR {data.pricePerCarton}</Text>
                <Text style={styles.text1}>Sale Price: PKR {data.salePriceDistributor}</Text>
                <Text style={styles.text1}>Number of Carton: {data.no_Of_Carton}</Text>
                <Text style={styles.text1}>Product Description: {data.productDescription}</Text>
            </View>
        </View>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.cardbackground,
    },
    titleBar:{
        width:'100%',
        height:90,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center'
    },
    titleBarText:{
        fontSize:24,
        fontWeight:'bold',
        color:colors.cardbackground
    },
    view2:{
        margin:15,
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'#F5F5F5',
        borderWidth:1,
        borderRadius:10,
        top:10,
        borderColor:'#808080'
    },
    text1:{
        fontSize:18,
        padding:5,
        color:colors.grey2,
        marginVertical:10,
        borderRadius:10
    }
})
