import { ProductType } from '@/types/productTypes'
import React from 'react'

const ProductCard = ({ product }: {
    product: ProductType
}) => {
    return (
        <div>{product.title}</div>
    )
}

export default ProductCard