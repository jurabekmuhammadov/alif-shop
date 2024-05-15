import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 pb-20 md:pb-0 mt-10'>
      <div className='px-5 py-16' style={{ maxWidth: 1320, margin: "0 auto", }}>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          <ul className='flex flex-col gap-3'>
            <li className='text-gray-500 text-sm'>Hujjatlar</li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Sotish uchun umumiy shartlar</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Ofertalar arxivi</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Nizom</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Guvohnoma</Link></li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <li className='text-gray-500 text-sm'>Servis</li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Namoz vaqti</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Muddatli to&apos;lov islomda</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Alif shopda soting!</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Qaytarish</Link></li>
          </ul>
          <ul className='flex flex-col gap-3'>
            <li className='text-gray-500 text-sm'>Tovarlar katalogi</li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Smartfonlar va telefonlar</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Gadjetlar</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Smartfonlar uchun aksessaurlar</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Tegishli tovarlar</Link></li>
            <li className='text-white cursor-pointer transition hover:text-yellow-500'><Link href={"/"}>Soat va aksessaurlar</Link></li>
          </ul>
          <ul className='flex flex-col'>
            <li className='text-gray-500 text-sm'>Biz ijtimoiy axborot vositalarida</li>
            <div className='flex items-center gap-3 mt-3'>
              <Link href={"https://instagram.com"} className='h-9 w-9'>
                <Image src="/instagram.webp" alt='instagram' width={35} height={35} className='rounded-lg object-cover w-full h-full transition hover:-translate-y-1.5' />
              </Link>
              <Link href={"https://facebook.com"} className='h-9 w-9'>
                <Image src="/facebook.png" alt='facebook' width={35} height={35} className='rounded-lg object-cover w-full h-full transition hover:-translate-y-1.5' />
              </Link>
              <Link href={"https://telegram.com"} className='h-9 w-9'>
                <Image src="/telegram.png" alt='telegram' width={35} height={35} className='rounded-lg object-cover w-full h-full transition hover:-translate-y-1.5' />
              </Link>
              <Link href={"https://ok.ru"} className='h-9 w-9'>
                <Image src="/odnaklasniki.png" alt='odnaklasniki' width={35} height={35} className='rounded-lg object-cover w-full h-full transition hover:-translate-y-1.5' />
              </Link>
              <Link href={"https://tiktok.com"} className='h-9 w-9'>
                <Image src="/tiktok.png" alt='tiktok' width={35} height={35} className='rounded-lg object-cover w-full h-full transition hover:-translate-y-1.5' />
              </Link>
            </div>
            <ul className='flex flex-col gap-3 mt-10'>
              <li className='text-gray-500 text-sm'>Axborot xizmati</li>
              <Link href={"https://t.me/alifazobot"} className='text-white font-bold flex items-center transition hover:text-yellow-500'>@alifshop_uz <ChevronRightIcon size={24} /></Link>
              <Link href={"tel:+998555121212"} className='text-white font-bold flex items-center transition hover:text-yellow-500'>+998555121212 <ChevronRightIcon size={24} /></Link>
            </ul>
          </ul>
        </div>
        <div className='border-t border-gray-500 mt-7'>
          <div className='flex justify-between items-center mt-7'>
            <p className='font-semibold text-gray-500 text-sm'>2024 © alifshop.uz</p>
            <Link href={"https://yandex.ru/cycounter?https://alifshop.uz&theme=dark&lang=ru"} className=''>
              <Image src={"/cycounter.png"} alt='yandex' width={80} height={80} className='w-full h-full rounded-md' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer