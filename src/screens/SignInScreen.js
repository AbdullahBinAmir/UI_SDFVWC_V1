import React, { useState } from 'react'
import { Text, StyleSheet, View,ScrollView,
   TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import { colors } from '../global/Vendor/Styles'
import { TextInput } from 'react-native-paper';
import { globalAPI } from '../global/APIAddress';

export default function SignInScreen({navigation}) {

  const [passView,setPassView]=useState(true)
  const [passText,setPassText]=useState('Show')
  const [emailAddress,setEmailAddress]=useState('')
  const [password,setPassword]=useState('')

  const Login=(type,userData)=>{
    if(type=='Vendor'){
        console.log(userData)
        navigation.navigate('VendorDrawer',{data:userData})
    }
    else if(type=='Distributor'){
        navigation.navigate('DistributorDrawer',{data:userData})
    }
    else{
        console.log(type)
        alert('User Does Not Exits')
    }
  }

  const getUsers= async (email,pass)=>{
    await fetch(globalAPI+'/users/getusers'+`?uemail=${email}&password=${pass}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(JSON.stringify(data[0]))
        console.log(data[0].userType)
        var userdata=data.filter((element, index, array)=>{
           return  (element.uemail===email && element.upassword===pass)
        })
        //console.log(userdata)
        Login(data[0].userType,userdata)
    })
    .catch(error => {
        console.log(error)
      });
  }

    return (
      <KeyboardAvoidingView style={styles.container} behavior={'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.titleBar}>
                <Text style={styles.titleBarText}>Welcome</Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>LOGIN</Text>
            </View>
            <View style={styles.textInputView}>
                <TextInput style={styles.textInput} label='Enter Email Address' keyboardType='email-address' selectionColor='black'
                  mode='outlined' value={emailAddress} onChangeText={(t)=>setEmailAddress(t)}
                />
                <TextInput style={styles.textInput} label='Enter Password'  secureTextEntry={passView}
                mode='outlined'  value={password} onChangeText={(t)=>setPassword(t)}
                />
            </View>
            <View style={styles.textInputView}>
                <Text style={{marginHorizontal:20,color:colors.buttons,textDecorationLine:'underline'}}
                   onPress={()=>{
                    passView?setPassText('Hide'):setPassText('Show')
                    setPassView(!passView)
                  }}
                >
                    {passText} Password
                </Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginHorizontal:15,marginVertical:10}}>
              <TouchableOpacity style={styles.sButton}
               onPress={()=>{
                  emailAddress=='d'?navigation.navigate('DistributorDrawer'):
                  emailAddress=='s'?navigation.navigate('ShopKeeperDrawer'):navigation.navigate('VendorDrawer',{data:[{uid:1}]})                
               }}>
                    <Text style={styles.btnText}>Sign IN</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signup}
                onPress={()=>navigation.navigate('SignUpScreen')}
            >
                  <Text style={{...styles.signupText,padding:10}}>Register</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>  
      </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.cardbackground
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
    title:{
        marginHorizontal:20,
        marginVertical:15
    },
    titleText:{
        fontSize:20,
        color:colors.buttons
    },
    textInputView:{
        margin:10,
        justifyContent:'center'
    },
    textInput:{
        fontSize:18,
        marginVertical:10,
        marginHorizontal:5
    },
    sButton:{
        width:'100%',
        height:60,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    btnText:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.cardbackground
    },
    signup:{
        alignItems:'center',
        margin:10,
        borderWidth:2,
        borderColor:colors.buttons,
        borderRadius:15,
        marginHorizontal:25
    },
    signupText:{
        color:colors.buttons,
        fontSize:18,
        fontWeight:'bold'
    }
})

// emailAddress=='distributor'?navigation.navigate('DistributorDrawer')
//                 :navigation.navigate('VendorDrawer')
