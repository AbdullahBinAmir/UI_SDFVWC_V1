import React, {useState} from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../global/Vendor/Styles'
import { catList } from '../../global/Shopkeeper/CategoryList'
import { RadioButton } from 'react-native-paper';
import { UsersList } from '../../global/Shopkeeper/UsersData'
import UserInfoCard from '../../components/UserInfoCard'

export default function ShopKeeperSearchDashboardScreen({navigation}) {

    const [categories,setCategories]=useState(catList)
    const [category,setCategory]=useState(categories[0])
    const [checked, setChecked] = useState('distributor');
    const [data,setData]=useState(UsersList)

    const filterUsersList=(cat)=>{
        let uList=[]
        for (let v of UsersList){
           for (let p in v.UserProducts){
              if(v.UserProducts[p].productCategory==cat){
                uList.push(v);
                break;
              }
           }
        }
        setData(uList);
    }

    const userTypeFilter=(type)=>{
        //filterUsersList(category) 
        setData(UsersList.filter((d)=>d.userType===type))
    }

    return (
      <View style={styles.container}>
        <Header navigate={navigation} title='ShopKeeper' />
        <View style={styles.textBarTab}>
        <Text style={styles.textTop}>Select Seller Type</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{flexDirection:'row',alignItems:'center',margin:10,right:15}}>
        <RadioButton
            value="distributor" color={colors.buttons}
            status={ checked === 'distributor' ? 'checked' : 'unchecked' }
            onPress={() => {
                setChecked('distributor')
                userTypeFilter('distributor')
            }}
        />
        <Text style={{fontSize:20,fontWeight:'bold',color:colors.grey2}}>Distributor</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',margin:10,left:15}}> 
        <RadioButton
            value="vendor" color={colors.buttons}
            status={ checked === 'vendor' ? 'checked' : 'unchecked' }
            onPress={() => {
                setChecked('vendor')
                userTypeFilter('vendor')
            }}
        />
        <Text style={{fontSize:20,fontWeight:'bold',color:colors.grey2}}>Vendor</Text>
    </View>
  </View>
        <View style={styles.textBarTab}>
            <Text style={styles.textTop}>Select a Category</Text>
        </View>
        <View style={{margin:10}}>
            <FlatList 
                style={{marginTop:10,marginBottom:10}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>(
                <TouchableOpacity onPress={()=>{
                setCategory(item);
                filterUsersList(item.cat);
                }}>
                <View style={item.id==category.id?{...styles.categoryBox,backgroundColor:colors.buttons}:styles.categoryBox}>
                    <Image source={{uri:item.img}}
                            style={styles.imgStyle}
                    />
                    <Text style={item.id==category.id?{...styles.catBoxText,color:colors.cardbackground}:styles.catBoxText}>{item.cat}</Text>
                </View>
                </TouchableOpacity>
                )}
            />
        </View>
      <View style={styles.textBarTab}>
        <Text style={styles.textTop}>Search Results</Text>
      </View>
      <View style={{flex:1,flexGrow:1}}>
        <FlatList
            style={{marginTop:10,marginBottom:10}}   
            horizontal={false}
            showsVerticalScrollIndicator={true}
            data={data}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{navigation.navigate('SearchedProductsListScreen',{data:item.UserProducts})}}>
                <UserInfoCard item={item} />
                <View style={{borderWidth:1,margin:10,padding:10,width:'50%',alignSelf:'flex-end',right:5,borderColor:colors.statusBar,backgroundColor:colors.statusBar,borderRadius:10}}>
                  <Text style={{fontSize:20,color:colors.cardbackground,textAlign:'center',fontWeight:'bold'}}
                    onPress={()=>{navigation.navigate('PlaceAnOrderScreen',{data:item,uType:item.userType})}} >Place an Order</Text>
                </View>
            </TouchableOpacity>
            )}
        />
        </View>
      </View>
    )
  }

const styles= StyleSheet.create({
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
    categoryBox:{
       margin:10,
       width:100,
       height:100,
       backgroundColor:'#F5F5F5',
       alignItems:'center',
       justifyContent:'flex-end',
       borderRadius:25
    },
    catBoxText:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.buttons,
        padding:5
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