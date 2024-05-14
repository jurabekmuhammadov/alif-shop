import { ArrowDown, ChevronDown, ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const categories = [
    {
        name: "Smartfonlar va gadjetlar",
        href: "/"
    },
    {
        name: "Noutbuklar, kompyuterlar",
        href: "/"
    },
    {
        name: "TV va proektorlar",
        href: "/"
    },
    {
        name: "Audiotexnikalar",
        href: "/"
    },
    {
        name: "Uy va o'yin uchun texnika",
        href: "/"
    },
    {
        name: "Oshxona uchun texnika",
        href: "/"
    },
    {
        name: "Go'zallik va sog'liq",
        href: "/"
    },
    {
        name: "Aqlli uy",
        href: "/"
    },
]

const CategoriesBar = () => {
    return (
        <div className='mt-1 my-4 flex items-center gap-2'>
            <ul className='w-full flex items-center gap-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap py-2'>
                {categories.map((ctg, i) => (
                    <li key={i} className=''>
                        <Link href={ctg.href} className='pb-2 text-gray-400 font-semibold text-sm hover:border-b-2 hover:border-gray-900 hover:text-gray-900 transition'>
                            {ctg.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <button type='button' className='flex items-center gap-1'>
                <ChevronDownIcon size={20} />
                <span className='text-sm md:text-base text-gray-900 font-semibold'>Yana</span>
            </button>
        </div>
    )
}

export default CategoriesBar