"use client"
import Loader from '@/components/loader'
import ProductCard from '@/components/product-card'
import useProductStore from '@/store/product/productStore'
import React, { useEffect } from 'react'

const Products = () => {
    const { loading, products, error, fetchProducts } = useProductStore()

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div>
            {loading && <Loader />}
            {error && <div>{error}</div>}
            {products?.length > 0 ? (
                <div>
                    {products.map((pr, i) => (
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

export default Products