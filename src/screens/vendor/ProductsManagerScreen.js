import React ,{useEffect } from 'react'
import ProductsForm from '../../components/ProductsForm';

export default function ProductsManagerScreen({route}) {
 let {data} =[]
  useEffect(()=>{
      if(route.params){
        data=route.params;
      }
      //console.log(route.params)
  },[])

   // console.log(JSON.stringify(data))


    return (
        <ProductsForm data={data}/>
    )
  }

