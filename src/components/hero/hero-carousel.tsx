"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const images = [
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
    "/img-5.png",
    "/img-6.png",
    "/img-7.png",
    "/img-8.png",
    "/img-9.png",
    "/img-10.png",
]

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-44 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full h-44 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg">
                {images.map((img, index) => (
                    <CarouselItem key={index} className="w-full h-44 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg">
                        <div className="w-full h-44 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-lg">
                            <Card className="border-none rounded-lg">
                                <CardContent className="h-full w-full p-0 rounded-lg">
                                    <Image src={img} alt="image" width={1000} height={500} className="w-full h-full object-cover rounded-lg" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
