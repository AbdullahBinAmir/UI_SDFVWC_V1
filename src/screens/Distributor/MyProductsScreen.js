import React, {useState} from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Image} from 'react-native'
import { colors } from '../../global/Vendor/Styles'
//import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../../components/Header'
import { myDProducts } from '../../global/Distributor/MyProductsData';
import VendorProductCard from '../../components/VendorProductCard';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MyProductScreen({navigation}) {

    const [products,setProducts]=useState(myDProducts)

    return (
      <View style={styles.container}>
                <Header navigate={navigation} title='Distributor' />
                <View style={styles.textBarTab}>
                    <Text style={styles.textTop}>My Products</Text>
                </View>
                <View style={{flex:1,flexGrow:1}}>
                    <FlatList
                        style={{marginTop:10,marginBottom:10}}
                        horizontal={false}
                        showsVerticalScrollIndicator={true} 
                        data={products}
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={({item})=>(
                        <View style={{marginRight:10}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('MyProductsDetailsScreen',{data:item})}}>
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
    },
    cardView:{
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
