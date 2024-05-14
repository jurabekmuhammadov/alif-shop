import { Heart, Home, LayoutList, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
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
          <Link href={"/"} className='flex flex-col items-center gap-2'>
            <ShoppingCart className='text-gray-400' />
            <span className='text-xs text-gray-400'>Savat</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className='flex flex-col items-center gap-2'>
            <Heart className='text-gray-400' />
            <span className='text-xs text-gray-400'>Saralanganlar</span>
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