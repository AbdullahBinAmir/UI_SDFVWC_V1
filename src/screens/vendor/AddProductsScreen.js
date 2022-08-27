import React from 'react'
import ProductsForm from '../../components/ProductsForm';

export default function AddProductsScreen({route}) {

  const {data}=route.params
  //console.log(data)
  const uid=data[0].id;
  console.log(uid)

    return (
        <ProductsForm id={uid}/>
    )
  }
