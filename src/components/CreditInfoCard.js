import React, {useState} from 'react'
import {Text, StyleSheet, View, FlatList, Image, TextInput, Button } from 'react-native'
import Modal from "react-native-modal";
import { colors } from '../global/Vendor/Styles';

export default function CreditInfoCard(props) {

    const item=props.item

    let usertype= props.userType?props.userType:''

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    return (
        <View style={{marginRight:10}}>
            <View style={styles.boxStyle}>
                <View style={{flexDirection:'column'}}>
                    <Image
                    source={{uri:item.distributorDetails.uimage}}  
                    style={styles.imageStyle}
                    />
                    <Text style={styles.textBtnStyles}
                        onPress={()=>{usertype==='distributor' && item.distributorDetails.userType==='vendor'?alert('You cannot make payment'):toggleModal()}}
                    >Make Payment</Text>
                    <Text style={styles.textBtnStyles}
                        onPress={props.navigate}
                    >View Payment</Text>

            <View style={{ flex: 1}}>
                <Modal isVisible={isModalVisible}>
                    <View style={{flex:.5,alignItems:'center',justifyContent:'center',backgroundColor:colors.cardbackground,borderRadius:20}}>
                    <View style={{marginVertical:10,paddingVertical:10}}>
                        <TextInput style={{borderWidth:2,borderRadius:10,borderColor:colors.buttons,padding:10,marginBottom:10,color:colors.grey1}} placeholder='Enter Amount Paid'/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                            <Button title="Close" onPress={
                                    toggleModal} />
                        </View>
                        <View  style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
                            <Button title='Save' />
                        </View>
                    </View>
                    </View>
                </Modal>
            </View>

      </View>
          <View style={{marginLeft:7,borderLeftWidth:2,padding:5,borderColor:colors.buttons}}>
          <Text style={styles.text2}>Name: </Text>
          <Text style={styles.text1}>{item.distributorDetails.uname}</Text>
          <Text style={styles.text2}>Mobile Number: </Text>
          <Text style={styles.text1}>{item.distributorDetails.umobileno}</Text>
          <Text style={styles.text2}>City: </Text>
          <Text style={styles.text1}>{item.distributorDetails.ucity}</Text>
          <Text style={styles.text2}>Amount Remaining: </Text>
          <Text style={styles.text1}> PKR {item.totalAmountRemaining}</Text>
      </View>
    </View>
    </View>
    )
  }

  const styles = StyleSheet.create({
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
          left:5
        },
        text1:{
          fontSize:16,
          color:colors.grey1,
          paddingHorizontal:5
        },
        text2:{
          fontSize:16,
          color:colors.grey1,
          fontWeight:'bold',
          fontStyle:'italic'
        },
        textBtnStyles:{
            height:50,width:80,
            borderWidth:1,
            borderColor:colors.buttons,
            padding:5,margin:5,
            textAlign:'center',
            borderRadius:10,
            color:colors.grey1,
            fontWeight:'bold',
            backgroundColor:colors.cardbackground
        }
})