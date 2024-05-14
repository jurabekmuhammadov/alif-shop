import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BaggageClaim, Heart, Menu, Search, ShoppingCart } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex items-center gap-4'>
      <Link href="#" className='w-28 h-8'>
        <Image src="/alif-logo.png" alt="logo" width={115} height={32} className='w-full h-full object-cover' />
      </Link>
      <button type='button' className='flex flex-row gap-3 items-center bg-red-500'>
        <Menu size={26} />
        <span>Tovarlar katalogi</span>
      </button>
      <div>
        <input type="search" placeholder='Tovarlarni izlash' className='border' />
        <button><Search />{""}</button>
      </div>
      <div>
        <ShoppingCart />
        <span>Savat</span>
      </div>
      <div>
        <Heart />
        <span>Saralanganlar</span>
      </div>
      <button type='button'>
        Kirish
      </button>
      <div>
        <button type='button'>Рус</button>
        <span>/</span>
        <button type='button'>Uzb</button>
      </div>
    </header>
  )
}

export default Header