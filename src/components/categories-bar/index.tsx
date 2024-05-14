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
        name: "Uy uchun texnika",
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
    }
]

const CategoriesBar = () => {
    return (
        <div>
            <div>
                {categories.map((ctg, i) => (
                    <Link key={i} href={ctg.href}>
                        <span>{ctg.name}</span>
                    </Link>
                ))}
            </div>
            <button type='button'>
                <ChevronDownIcon />
                <span>Yana</span>
            </button>
        </div>
    )
}

export default CategoriesBar