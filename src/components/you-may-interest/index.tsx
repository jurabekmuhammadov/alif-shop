/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import useProductStore from '@/store/product/productStore'
import React, { useEffect, useState } from 'react'
import ProductCard from '../product-card'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

const YouMayInterest = () => {
    const { loading, products, error, fetchProducts } = useProductStore()
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='mt-8 mb-60 flex flex-col items-start'>
            <div className='mb-4 flex items-center justify-between md:justify-start md:gap-5 w-full'>
                <h1 className='text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl'>Sizni qiziqtirishi mumkin</h1>
                <Link href={"/"} className='flex items-center text-sm font-semibold hover:underline text-blue-500 md:text-lg'>
                    <span>Hamasini ko`rish</span>
                    <ChevronRightIcon />
                </Link>
            </div>
            {error && <div>{error}</div>}
            {products?.length > 0 ? (
                <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-2 lg:grid-cols-5 lg:gap-2 lg:grid-rows-1 xl:grid-cols-6 xl:gap-3'>
                    {products.slice(6, 12 + (showMore ? 6 : 0)).map((pr, i) => (
                        <ProductCard key={i} product={pr} />
                    ))}
                </div>
            ) : (
                !loading && <div className='bg-yellow-500'>No Products</div>
            )
            }
            <button className='mt-4 mx-auto px-10 py-2 bg-yellow-500 bg-opacity-50 rounded-lg transition hover:bg-opacity-80 text-sm md:text-base' onClick={() => setShowMore(!showMore)}>{showMore ? "Kamroq ko'rsatish" : "Ko'proq ko'rsatish"}</button>
        </div>
    )
}

export default YouMayInterest