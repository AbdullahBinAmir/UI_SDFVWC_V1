import React,{useState} from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity} from 'react-native'
import { colors } from '../../global/Vendor/Styles'
//import Icon from 'react-native-vector-icons/FontAwesome'
import VendorProductCard from '../../components/VendorProductCard'
import {vendorProduct} from '../../global/Vendor/VProductData'
import Header from '../../components/Header'
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ProductScreen({route,navigation}) {

    const {data}=route.params;
    console.log(data)
    const[mydata,setMyData]=useState(vendorProduct)
    return (
      <View style={styles.container}>
                <Header navigate={navigation} title='Vendor'/>
                <View style={styles.textBarTab}>
                    <Text style={styles.textTop}>My Products</Text>
                </View>
                <View style={{flex:1,flexGrow:1}}>
                    <FlatList
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={false}
                        showsVerticalScrollIndicator={true}
                        data={mydata}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={({item})=>(
                        <View style={{marginRight:10}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('ProductsManagerScreen',{data:item})}}>
                            <VendorProductCard
                                pid={item.pid}
                                screenWidth={SCREEN_WIDTH*0.9}
                                pname={item.pname}
                                quantityPerCarton={item.quantityPerCarton}
                                pricePerCarton={item.pricePerCarton}
                                purchasePriceDistributor={item.purchasePriceDistributor}
                                salePriceDistributor={item.salePriceDistributor}
                                no_Of_Carton={item.no_Of_Carton}
                                companyName={item.companyName}
                                thresholdToBuy={item.thresholdToBuy}
                                productCategory={item.productCategory}
                                productDescription={item.productDescription}
                                productImage={item.productImage}
                            />  
                        </TouchableOpacity>
                        </View>
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
    }
})
