import React,{useState} from 'react'
import { Text, View, StyleSheet,FlatList, TouchableOpacity, Image,} from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../global/Vendor/Styles';
import { vendorList } from '../../global/Distributor/VendorListData';
import UserInfoCard from '../../components/UserInfoCard';

export default function VendorListScreen({navigation}) {

  const[catList,setCatList]=
  useState([{id:1,cat:'Frozen',img:'https://cdn-icons-png.flaticon.com/512/2372/2372158.png'},
             {id:2,cat:'Snacks',img:'https://cdn-icons-png.flaticon.com/512/859/859293.png'},
             {id:3,cat:'Sweet',img:'https://icons.iconarchive.com/icons/atyourservice/service-categories/512/Sweets-icon.png'},
             {id:4,cat:'Daily Use',img:'https://www.pngitem.com/pimgs/m/494-4943095_groceries-icon-everyday-icons-hd-png-download.png'},
             {id:5,cat:'Dairy',img:'https://cdn-icons-png.flaticon.com/512/3050/3050158.png'},
             {id:6,cat:'Baby food',img:'https://img.freepik.com/free-vector/organic-baby-food-advert-template_1284-25597.jpg?w=2000'},
             {id:7,cat:'Drinks',img:'https://cdn-icons-png.flaticon.com/512/820/820603.png'},])

  const [category,setCategory]=useState(catList[0])    
  
  const [vendorData,setVendorData]=useState(vendorList);

  const filterVendorsList=(cat)=>{
      //console.log(vendorData)
      let vList=[]
      for (let v of vendorList){
         for (let p in v.vendorProducts){
            if(v.vendorProducts[p].productCategory==cat){
              //console.log(v)
              vList.push(v);
              break;
            }
         }
      }
      //console.log(vList)
      setVendorData(vList);
  }

  const[scity,setSCity]=useState('')

//   const filterVendorsListByCity=(city)=>{
//     let vList=[]
//     for (let v of vendorList){
//           if(v.vcity==city){
//             vList.push(v);
//           }
//     }
//     if(vList){
//       setVendorData(vList);
//     }
// }

    return (
      <View style={styles.container}>
         <Header navigate={navigation} title='Distributor' />
         <View style={styles.textBarTab}>
          <Text style={styles.textTop}>Select a Category</Text>
        </View>
         <View>
              <FlatList
              style={{marginTop:10,marginBottom:10}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={catList}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item})=>(
              <TouchableOpacity onPress={()=>{
                //console.log(item)
                setCategory(item);
                filterVendorsList(item.cat);
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
        <View style={{flex:1,flexGrow:1}}>
          <FlatList
            style={{marginTop:10,marginBottom:10}}   
            horizontal={false}
            showsVerticalScrollIndicator={true}
            data={vendorData}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>navigation.navigate('VendorDetailsScreens',{data:item})}>
                <UserInfoCard item={item} />
              </TouchableOpacity>
            )}
          />
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
