import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Heart, Menu, Search, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import useCartStore from '@/store/cart/cartStore'
import useFavoriteStore from '@/store/favorites/favoriteStore'

const Header = () => {
  const { cart } = useCartStore();
  const { favorites } = useFavoriteStore();

  return (
    <header className='flex flex-row-reverse md:flex-row justify-between items-center gap-3 py-4 px-5' style={{ maxWidth: 1320, margin: "0 auto" }}>
      <Link href="/" className='hidden w-28 h-8 md:flex items-center justify-center'>
        <Image src="/alif-logo.png" alt="logo" width={115} height={32} />
      </Link>
      <button type='button' className='hidden md:flex flex-row gap-2 items-center py-2 lg:py-2.5 px-3 rounded-lg bg-yellow-500'>
        <Menu size={26} className='w-6 lg:w-7' />
        <span className='hidden font-semibold text-sm lg:block'>Tovarlar katalogi</span>
      </button>
      <div className='flex w-full md:w-2/5 relative md:static'>
        <input type="search" placeholder='Tovarlarni izlash' className='w-full rounded-lg p-2 text-sm md:text-base placeholder:text-xs md:p-1.5 lg:p-2 outline-none border-2 border-gray-300 md:border-yellow-500 focus:border-yellow-500 md:border-2 md:rounded-e-none' />
        <button className='hidden md:flex items-center justify-center bg-yellow-500 rounded-e-lg p-2 px-3'><Search className='md:w-6' />{""}</button>
        <button type='button' className='block bg-white p-1 md:hidden absolute top-1 right-2'>
          <Search className='text-yellow-500 w-6' />{""}
        </button>
      </div>
      <Link href={"/cart"} className='hidden md:flex flex-col items-center relative'>
        <ShoppingCart />
        <span className='text-xs lg:text-sm'>Savat</span>
        {cart.length > 0 && (
          <Badge variant="destructive" className='absolute py-0 px-1 text-semibold text-white -top-2 right-0'>{cart.length}</Badge>
        )}
      </Link>
      <Link href={"/favorites"} className='hidden md:flex flex-col items-center relative'>
        <Heart />
        <span className='text-xs lg:text-sm'>Saralanganlar</span>
        {favorites.length > 0 && (
          <Badge variant="destructive" className='absolute py-0 px-1 text-semibold text-white -top-2 right-7'>{favorites.length}</Badge>
        )}
      </Link>
      <button type='button' className='hidden md:block py-2 px-4 border-yellow-400 border-2 rounded-lg font-semibold hover:bg-yellow-100 text-xs '>
        Kirish
      </button>
      <div className=' hidden md:flex items-center gap-1'>
        <button type='button' className='uppercase text-sm text-slate-400'>Рус</button>
        <span className='text-slate-400'>/</span>
        <button type='button' className='uppercase text-sm text-slate-700'>Uzb</button>
      </div>
    </header>
  )
}

export default Header