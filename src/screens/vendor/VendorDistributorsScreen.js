import React,{useState} from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import UserInfoCard from '../../components/UserInfoCard';
import Header from '../../components/Header'
import { colors } from '../../global/Vendor/Styles'
import { vendorDistributors } from '../../global/Vendor/VDistributorsData';

export default function VendorDistributorsScreen({navigation}) {

    const [data,setData]=useState(vendorDistributors)

    return (
      <View style={styles.container}>
            <Header navigate={navigation} title='Vendor' />
            <View style={styles.textBarTab}>
                <Text style={styles.textTop}>My Distributors</Text>
            </View>
            <View style={{flex:1,flexGrow:1}}>
                <FlatList
                    style={{marginTop:10,marginBottom:10}}
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    data={data}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>(
                    <View style={{marginRight:10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('DistributorsDetails',{data:item})}>
                        <UserInfoCard
                            item={item}
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
