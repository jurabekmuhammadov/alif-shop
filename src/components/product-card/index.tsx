import { ProductType } from '@/types/productTypes'
import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: {
    product: ProductType
}) => {
    return (
        <div className='w-full rounded-md flex flex-col justify-start items-start gap-3 bg-zinc-100 pb-2 relative transition shadow-lg cursor-pointer'>
            <div className='w-full h-36 md:h-48 relative'>
                <span className='absolute bottom-2 left-2 bg-red-500 p-1 text-xs md:text-sm rounded-full text-white font-semibold'>-{product.discountPercentage}%</span>
                <Image src={product.thumbnail} alt='product image' width={100} height={100} className='rounded-md w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-2 justify-start items-start text-sm font-medium px-2'>
                <p
                    className='line-clamp-2 text-gray-900 text-xs md:text-sm font-normal'
                >
                    {product.description}
                </p>
                <p className='border rounded-xl text-gray-900 border-yellow-500 p-1 text-xs w-auto bg-amber-200'><span className='font-bold'>{(product.price / 12).toFixed(2)}</span> usd dan/oyiga</p>
                <p className='line-through text-gray-400'>{product.price} usd</p>
                <p className='text-red-500'>{(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)} usd</p>
            </div>
            <button type='button' className='ml-2 flex items-center gap-1 bg-yellow-500 py-1 px-2 md:py-2 md:px-3 rounded-lg transition hover:bg-yellow-500 hover:bg-opacity-60'>
                <ShoppingCart className='w-5' />
                <span className='text-xs md:text-sm'>Savatga</span>
            </button>
            <button type='button' className='absolute top-2 right-2 bg-white rounded-sm p-0.5 flex items-center justify-center'>
                <Heart className='text-gray-400' />{ }
            </button>
        </div >
    )
}

export default ProductCard