import { products } from '@/constans'
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl my-8 text-center'>Product List</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

              {
            products.map((product) => (
                <ProductItem product={product}/>
            ))
        }
        </div>
      
    </div>
  )
}

export default ProductList