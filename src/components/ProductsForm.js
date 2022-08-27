import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView,
   TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, Button, Image } from 'react-native';
import { colors } from '../global/Vendor/Styles';
import {launchImageLibrary} from 'react-native-image-picker';
import avatarImage from '../assets/productAvatar.png'
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-paper';
import { globalAPI } from '../global/APIAddress';

export default function ProductsForm(props) {
      const data=props.data
      const id=props.id
      if(data){
         assignData(data)
      }

      const SaveProduct=async ()=>{
         let data1 = new FormData()
         data1.append('file', image)
         data1.append('name',name)
         data1.append('cName',companyName)
         data1.append('desp',productDescription)
         data1.append('nofCottons',noOfCarton)
         data1.append('qtyCotton',quantityPerCarton)
         data1.append('priceCotton',pricePerCarton)
         data1.append('ppriceCotton',purchasePriceDistributor)
         data1.append('spriceCotton',salePriceDistributor)
         data1.append('cat',value)
         data1.append('vid',id.toString())
         data1.append('threshold',thresholdToBuy)
         let serverResponse = await fetch(globalAPI+'/VendorProducts/AddProducts',
         {
           method:'POST',
           headers:
           {
             Accept:'application/json',
             'Content-Type' : 'multipart/form-data'
           },
           body:data1
         })
         .then(function(json){
           console.log(data)
           if(json.status===200)
           {
             console.log(JSON.stringify(json))
             alert("Added Sucessfully")
           }
           else
             console.log(JSON.stringify(json))
         })
         .catch(
             function(error) {
             console.log('There has been a problem with your fetch operation: ' + error.message);
             })
      }

  const options={
      title:'Select Image',
      type:'library',
      options:{
        maxHeight:200,
        maxWidth:200,
        selectionLimit:1,
        mediaType:'photo',
        includeBase64:false
      }
   }

    //const {data}=route.params;
   // console.log(JSON.stringify(data))

  const openGallery=async ()=>{
      const result=await launchImageLibrary(options)
      setImagesrc(result.assets[0].uri)
      setImage({
        uri:result.assets[0].uri ,
        type: result.assets[0].type, 
        name:result.assets[0].fileName
      })
      console.log(result)
  }

  const [imgsrc,setImagesrc]=useState(Image.resolveAssetSource(avatarImage).uri)
  const [name,setName]=useState('')
  const [quantityPerCarton,setQuantityPerCarton]=useState('')
  const [pricePerCarton,setPricePerCarton]=useState('')
  const [purchasePriceDistributor,setPurchasePriceDistributor]=useState('')
  const [salePriceDistributor,setSalePriceDistributor]=useState('')
  const [noOfCarton,setNoOfCarton]=useState('')
  const [thresholdToBuy,setThresholdToBuy]=useState('')
  const [thresholdShopkeeper,setThresholdShopkeeper]=useState('')
  const [companyName,setCompanyName]=useState('')
  const [productDescription,setProductDescription]=useState('')  
  const [image,setImage]=useState()

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Drinks', value: 'Drinks'},
    {label: 'Snacks', value: 'Snacks'},
    {label: 'Dairy', value: 'Dairy'},
    {label: 'Frozen Foods', value: 'Frozen'},
    {label: 'Sweet', value: 'Sweet'},
    {label: 'Daily Use', value: 'Daily Use'},
    {label: 'Baby food', value: 'Baby food'},
  ]);

  const [open1, setOpen1] = useState(false);
  const [flagValue, setFlagValue] = useState(null);
  const [doptions, setdOptions] = useState([
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ]);

  const assignData=(data)=>{
     console.log(data)
      setImagesrc(data.productImage)
      setName(data.pname)
      setQuantityPerCarton(data.quantityPerCarton.toString())
      setPricePerCarton(data.pricePerCarton.toString())
      setPurchasePriceDistributor(data.purchasePriceDistributor.toString())
      setSalePriceDistributor(data.salePriceDistributor.toString())
      setNoOfCarton(data.no_Of_Carton.toString())
      setThresholdToBuy(data.thresholdToBuy.toString())
      setProductDescription(data.productDescription)
      setValue(data.productCategory)
  }

    return (

      <KeyboardAvoidingView style={styles.container} behavior={'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleBar}>
                <Text style={styles.titleBarText}>{data?'Upadate Products':'Add New Product'}</Text>
            </View>
            <View style={{margin:10,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:imgsrc}} style={{width:100,height:100}}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                <Button title='upload image' onPress={openGallery}/>
            </View>
            <View style={styles.textInputView}>
                <TextInput  mode='outlined'
                  style={styles.textInput} label='Enter Product Name'
                    value={name} onChangeText={(t)=>setName(t)}
                />
                <TextInput  mode='outlined'
                  style={styles.textInput} label='Enter Company Name'
                    value={companyName} onChangeText={(t)=>setCompanyName(t)}
                />
                <TextInput mode='outlined'
                  style={styles.textInput} label='Quantity Per Carton' keyboardType='number-pad'
                    value={quantityPerCarton} onChangeText={(t)=>setQuantityPerCarton(t)}
                />
                <TextInput  mode='outlined'
                  style={styles.textInput} label='Price Per Carton' keyboardType='number-pad'
                    value={pricePerCarton} onChangeText={(t)=>setPricePerCarton(t)}
                />
                <TextInput mode='outlined'
                  style={styles.textInput} label='Purchase Price for distributor' keyboardType='number-pad'
                    value={purchasePriceDistributor} onChangeText={(t)=>setPurchasePriceDistributor(t)}
                />
                <TextInput  mode='outlined'
                style={styles.textInput} label='Sale Price for distributor' keyboardType='number-pad'
                  value={salePriceDistributor} onChangeText={(t)=>setSalePriceDistributor(t)}
                />
                <TextInput  mode='outlined'
                style={styles.textInput} label='Number of Cartons' keyboardType='number-pad'
                  value={noOfCarton} onChangeText={(t)=>setNoOfCarton(t)}
                />
                <TextInput  mode='outlined'
                style={styles.textInput} label='Threshold for Distributor' keyboardType='number-pad'
                  value={thresholdToBuy} onChangeText={(t)=>setThresholdToBuy(t)}
                />
                <View style={styles.dropdown}>
                  <Text style={styles.titleText}>Please select product category</Text>
                    <DropDownPicker
                    style={{borderColor:colors.buttons,padding:10,marginTop:open? 80 : null}}
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      listMode="SCROLLVIEW"
                      dropDownDirection='TOP'
                    />
                </View>

              <View style={styles.dropdown}>
                <Text style={styles.titleText}>Can Shoopkeeper Purchase this Product?</Text>
                  <DropDownPicker
                  style={{borderColor:colors.buttons,padding:10,marginTop:open? 80 : null}}
                    open={open1}
                    value={flagValue}
                    items={doptions}
                    setOpen={setOpen1}
                    setValue={setFlagValue}
                    setItems={setdOptions}
                    listMode="SCROLLVIEW"
                    dropDownDirection='TOP'
                  />
              </View>


              {flagValue=='Yes'?(<TextInput mode='outlined'
                style={styles.textInput} label='Threshold for Shopkeeper' 
                value={thresholdShopkeeper} onChangeText={(t)=>setThresholdShopkeeper(t)} 
               /> ):null}             

                <TextInput
                    style={{...styles.textInput,paddingVertical:20,borderRadius:5}} label='Enter Product Description'  placeholderTextColor={colors.grey2}
                    value={productDescription} onChangeText={(t)=>setProductDescription(t)} multiline={true}
                />
            </View>
            {
               data?(
                  <View style={{alignItems:'center',justifyContent:'center',marginHorizontal:15,marginVertical:5,marginBottom:25}}>
                     <TouchableOpacity style={styles.sButton} onPress={()=>{console.log('Update')}}>
                        <Text style={styles.btnText}>Update Product</Text>
                     </TouchableOpacity>
                  </View>
               ):
               (
                  <View style={{alignItems:'center',justifyContent:'center',marginHorizontal:15,marginVertical:5,marginBottom:25}}>
                     <TouchableOpacity style={styles.sButton} onPress={SaveProduct}>
                        <Text style={styles.btnText}>Add Product</Text>
                     </TouchableOpacity>
                  </View>
               )                
            }
          </ScrollView>
        </TouchableWithoutFeedback>  
      </KeyboardAvoidingView>
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
    textInputView:{
        margin:10,
        justifyContent:'center'
    },
    textInput:{
      fontSize:18,
      marginVertical:10,
      marginHorizontal:5
    },
    dropdown:{
      padding:10,
      margin:10,
      borderRadius:25,
      color:'black',
      fontSize:16,
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
    signin:{
        alignItems:'flex-end',
        margin:10
    },
    signinText:{
        textDecorationLine:'underline',
        color:colors.grey1,
        fontSize:16
    },
    titleText:{
      fontSize:16,
      color:colors.buttons,
      padding:10
  }
})
