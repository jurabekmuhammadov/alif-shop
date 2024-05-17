"use client"
import { Heart, Home, LayoutList, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'
import useAddToCartStore from '@/store/cart/cartStore'
import useFavoriteStore from '@/store/favorites/favoriteStore'

const MobileNav = () => {
  const { cart } = useAddToCartStore();
  const { favorites } = useFavoriteStore();

  return (
    <div className='md:hidden fixed bottom-0 left-0 right-0 w-full py-2 px-4 shadow-2xl shadow-zinc-900 bg-white'>
      <ul className='flex items-center justify-around w-full h-full'>
        <li>
          <Link href={"/"} className='flex flex-col items-center gap-2'>
            <Home className='text-yellow-500' />
            <span className='text-xs text-black'>Asosiy</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className='flex flex-col items-center gap-2'>
            <LayoutList className='text-gray-400' />
            <span className='text-xs text-gray-400'>Katalog</span>
          </Link>
        </li>
        <li>
          <Link href={"/cart"} className='flex flex-col items-center gap-2 relative'>
            <ShoppingCart className='text-gray-400' />
            <span className='text-xs text-gray-400'>Savat</span>
            {cart.length > 0 && (
              <Badge variant="destructive" className='absolute py-0 px-1 text-semibold text-white -top-2 right-0'>{cart.length}</Badge>
            )}
          </Link>
        </li>
        <li>
          <Link href={"/favorites"} className='flex flex-col items-center gap-2 relative'>
            <Heart className='text-gray-400' />
            <span className='text-xs text-gray-400'>Saralanganlar</span>
            {favorites.length > 0 && (
              <Badge variant="destructive" className='absolute py-0 px-1 text-semibold text-white -top-2 right-6'>{favorites.length}</Badge>
            )}
          </Link>
        </li>
        <li>
          <Link href={"/"} className='flex flex-col items-center gap-2'>
            <User className='text-gray-400' />
            <span className='text-xs text-gray-400'>Profil</span>
          </Link>
        </li>
      </ul>
    </div >
  )
}

export default MobileNav