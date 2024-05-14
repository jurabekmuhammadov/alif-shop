"use-client"
import React from 'react'
import { CarouselPlugin } from './hero-carousel'

const Hero = () => {
    return (
        <div className='h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg'>
            <CarouselPlugin />
        </div>
    )
}

export default Hero