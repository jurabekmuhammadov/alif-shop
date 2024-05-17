import useCartStore from '@/store/cart/cartStore'
import useFavoriteStore from '@/store/favorites/favoriteStore'
import { ProductType } from '@/types/productTypes'
import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'

type QuantitiesType = {
    [productId: number]: number;
};

interface ProductCardProps {
    product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { cart, addToCart, updateQuantity, removeFromCart } = useCartStore();
    const { favorites, removeFromFavorite, addToFavorite } = useFavoriteStore();
    const [quantities, setQuantities] = useState<QuantitiesType>({});

    const handleAddToCart = (product: ProductType) => {
        addToCart(product);
        setQuantities(prev => ({ ...prev, [product.id]: 1 }));
    };

    const isProductInCart = (productId: number): boolean => {
        return cart.some((item) => item.id === productId);
    };

    const handleRemoveFromCart = (productId: number) => {
        removeFromCart(productId);
        setQuantities(prev => {
            const { [productId]: _, ...newQuantities } = prev;
            return newQuantities;
        });
    };

    const handleAddToFavorite = (product: ProductType) => {
        addToFavorite(product);
    };

    const isProductInFavorite = (productId: number): boolean => {
        return favorites.some((item: ProductType) => item.id === productId);
    };

    const incrementQuantity = (productId: number) => {
        setQuantities(prev => {
            const newQuantity = (prev[productId] || 1) + 1;
            updateQuantity(productId, newQuantity);
            return { ...prev, [productId]: newQuantity };
        });
    };

    const decrementQuantity = (productId: number) => {
        setQuantities(prev => {
            if (prev[productId] > 1) {
                const newQuantity = prev[productId] - 1;
                updateQuantity(productId, newQuantity);
                return { ...prev, [productId]: newQuantity };
            } else {
                handleRemoveFromCart(productId);
                return prev;
            }
        });
    };

    return (
        <div className='w-full rounded-md flex flex-col justify-start items-start gap-3 bg-zinc-100 pb-2 relative transition shadow-lg cursor-pointer'>
            <div className='w-full h-36 md:h-48 relative'>
                <span className='absolute bottom-2 left-2 bg-red-500 p-1 text-xs md:text-sm rounded-full text-white font-semibold'>-{product.discountPercentage}%</span>
                <Image src={product.thumbnail} alt='product image' width={100} height={100} className='rounded-md w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-2 justify-start items-start text-sm font-medium px-2'>
                <p className='line-clamp-2 text-gray-900 text-xs md:text-sm font-normal'>
                    {product.description}
                </p>
                <p className='border rounded-xl text-gray-900 border-yellow-500 p-1 text-xs w-auto bg-amber-200'>
                    <span className='font-bold'>{(product.price / 12).toFixed(2)}</span> usd dan/oyiga
                </p>
                <p className='line-through text-gray-400'>{product.price} usd</p>
                <p className='text-red-500'>{(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)} usd</p>
            </div>
            {isProductInCart(product.id) ? (
                <div className='ml-2 flex justify-center items-center gap-1 bg-slate-200 h-12 md:py-2 md:px-3 rounded-lg transition hover:bg-opacity-60'>
                    <span className='text-semibold text-sm'>Added</span>
                    <Minus className='cursor-pointer' onClick={() => decrementQuantity(product.id)} />
                    <span>{quantities[product.id]}</span>
                    <Plus className='cursor-pointer' onClick={() => incrementQuantity(product.id)} />
                </div>
            ) : (
                <button onClick={() => handleAddToCart(product)} type='button' className='ml-2 flex items-center gap-1 bg-yellow-500 py-1 px-2 md:py-2 md:px-3 rounded-lg transition hover:bg-yellow-500 hover:bg-opacity-60'>
                    <ShoppingCart className='w-5' />
                    <span className='text-xs md:text-sm'>Savatga</span>
                </button>
            )}
            {isProductInFavorite(product.id) ? (
                <button type='button' className='absolute top-2 right-2 rounded-sm flex items-center justify-center' onClick={() => removeFromFavorite(product.id)} >
                    <FaHeart color='red' size={22} />{ }
                </button>
            ) : (
                <button type='button' className='absolute top-2 right-2 rounded-sm flex items-center justify-center' onClick={() => handleAddToFavorite(product)} >
                    <FaHeart size={22} className='text-gray-300' />{ }
                </button>
            )}
        </div>
    )
}

export default ProductCard;
