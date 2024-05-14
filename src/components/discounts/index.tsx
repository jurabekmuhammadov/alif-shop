/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import useProductStore from '@/store/product/productStore'
import React, { useEffect } from 'react'
import ProductCard from '../product-card'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

const Discounts = () => {
    const { loading, products, error, fetchProducts } = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='mt-8'>
            <div className='mb-4 flex items-center justify-between md:justify-start md:gap-5'>
                <h1 className='text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl'>Chegirmalar 🔥</h1>
                <Link href={"/"} className='flex items-center text-sm font-semibold hover:underline text-blue-500 md:text-lg'>
                    <span>Hamasini ko`rish</span>
                    <ChevronRightIcon />
                </Link>
            </div>
            {error && <div>{error}</div>}
            {products?.length > 0 ? (
                <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-2 lg:grid-cols-5 lg:gap-2 lg:grid-rows-1 xl:grid-cols-6 xl:gap-3'>
                    {products.slice(0, 6).map((pr, i) => (
                        <ProductCard key={i} product={pr} />
                    ))}
                </div>
            ) : (
                !loading && <div className='bg-yellow-500'>No Products</div>
            )
            }
        </div>
    )
}

export default Discounts