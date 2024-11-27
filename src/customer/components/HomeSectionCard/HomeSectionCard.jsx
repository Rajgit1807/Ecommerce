import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({product}) => {
  const navigate = useNavigate();
  return (

    <div onClick={() => navigate(`/product/${product._id}`)}
    className='border cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3 w-[15rem]'>
      <div className='object-top overflow-hidden w-[10rem] h-[13rem]'>
        <img src ={product.imageUrl} alt =""/>
      </div>
      <div className='p-4'>
       <h3 className='text-lg font-medium text-gray-800'>{product.brand}</h3>
       <p className='mt-2 text-sm text-gray-800'>{product.title}</p>
       <div className='flex'>
       <p className='mt-1 text-sm text-green-800'>₹ {product.discountedPrice}</p>
       <p className='mt-1 text-sm text-gray-800 ml-5 line-through opacity-50'>₹ {product.price}</p>
       </div>
      </div>
    </div>

  )
}

export default HomeSectionCard