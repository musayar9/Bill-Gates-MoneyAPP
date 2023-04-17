import React from 'react'
import products from '../Api/products'
import ProductsList from './ProductsList'
function Products() {
  return (
    <div className='mt-3 w-full'>
        <div className='container max-w-5xl px-0' >
            <div className='grid m-4 md:m-2 lg:m-0 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {
                    products.map((product)=>(
                        <ProductsList key={product.id} {...product}/>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default Products
 