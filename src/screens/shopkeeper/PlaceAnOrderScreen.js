import React,{useState} from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, TextInput, ScrollView}  from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../global/Vendor/Styles';
import { Badge, withBadge } from '@rneui/base';

export default function PlaceAnOrderScreen({route,navigation}) {

    const [userQty,setUserQty]=useState(0);
    const [cart,setCart]=useState([])
    let [cartCount,setCartCount]=useState(0)

    const {data,uType}=route.params;
console.log(uType)
    const BadgeIcon=withBadge(cartCount)(Icon)

    return (
     <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={{fontSize:26,fontWeight:'bold',color:colors.cardbackground}}>Place Order </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('CheckoutScreen',{data:cart})}>
            <BadgeIcon
              name="shopping-cart"
              size={35}
              color={colors.cardbackground}
            />
          </TouchableOpacity>
        </View> 
           <View style={styles.textBarTab}>
             <Text style={styles.textTop}> User Products</Text>
           </View>
           <View style={{flex:1,flexGrow:1}}>
           <FlatList
             style={{marginTop:10,marginBottom:10}}
             horizontal={false}
             showsVerticalScrollIndicator={false}   
             data={data.UserProducts}
             keyExtractor={(item,index)=>index.toString()}
             renderItem={({item,index})=>(
               <View style={{marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.boxStyle}>
                            <Image
                                source={{uri:item.productImage}}  
                                style={styles.imageStyle} 
                           />
                           <View style={{marginLeft:5,marginTop:5,paddingVertical:10}}>
                             <Text style={styles.text1}>Name: {item.pname}</Text>
                             <Text style={styles.text1}>Price: PKR {item.purchasePriceDistributor}</Text>
                             {(uType=='vendor')?(
                             <Text style={styles.text1}>Threshold: {item.thresholdShopkeeper}</Text>):null
                             }
                             <View style={{flexDirection:'row',margin:5,alignItems:'center'}}>
                                <Text style={{fontSize:18,color:colors.buttons}}>User Quantity </Text>
                                <TextInput placeholder='Qty to Buy' value={item.qtyOdered}
                                  onChangeText={(n)=>{
                                    setUserQty(n)
                                    item.qtyOdered=n
                                  }} 
                                  style={{borderWidth:1,borderColor:colors.buttons,color:colors.grey2,marginLeft:5,fontSize:16,borderRadius:5}}
                                />
                             </View>
                             <TouchableOpacity style={styles.cartBtn}
                             onPress={()=>{
                                if(uType==='vendor'){
                                    if(item.qtyOdered!=0 && item.qtyOdered>=item.thresholdShopkeeper && (cart.filter(c=>c.pid===item.pid)).length===0){
                                        //console.log(item)
                                        //console.log(cart)
                                       // setCart({...cart,item})
                                        setCart((prev)=>[...prev,item])
                                        setCartCount(cartCount+1)
                                      
                                    }
                                    else{
                                      // console.log(JSON.stringify(item))
                                      //   console.log(cart.filter(c=>c.id===item.id))
                                        alert('Quantity Should be Greater than Threshold || Already add to cart')
                                    }
                                }
                                else if(uType==='distributor'){
                                    if((cart.filter(c=>c.pid===item.pid)).length===0){
                                        setCart((prev)=>[...prev,item])
                                        setCartCount(cartCount+1)
                                      
                                    }
                                    else{
                                        alert('Already add to cart')
                                    }
                                }
                             }}>
                                <Text style={styles.cartText}>Add to Cart</Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={{...styles.cartBtn,marginTop:5}}
                             onPress={()=>{
                              if((cart.filter(c=>c.pid===item.pid)).length>0){
                                 //console.log(JSON.stringify(item))
                                //setCart({})
                                const id=item.pid
                                setCart(cart.filter(c=>c.pid!==id))
                                let count=cart.length
                                setCartCount(cartCount-1)
                                console.log(JSON.stringify(cart))
                              }
                             }}>
                                <Text style={styles.cartText}>Remove from Cart</Text>
                             </TouchableOpacity>
                           </View>
                         </View>
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
    titleBar:{
      width:'100%',
      height:80,
      backgroundColor:colors.buttons,
      alignItems:'center',
      justifyContent:'space-around',
      flexDirection:'row',
      paddingLeft:10,
      paddingRight:10
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
        fontSize:16,
        color:colors.grey1
      },
      text2:{
        fontSize:18,
        color:colors.grey1,
        padding:5
      },
      cartBtn:{
        borderWidth:1,
        padding:5,
        margin:5,
        borderColor:colors.buttons,
        borderRadius:10,
        backgroundColor:colors.cardbackground
    },
    cartText:{
        textAlign:'center',
        fontSize:18,
        color:colors.buttons,
        fontWeight:'bold'
    }
  })
  