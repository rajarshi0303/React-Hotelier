import { useState, useEffect } from "react"
import axios from "axios"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Testimonials() {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/testimonials")
            .then((response) => {
                console.log(response.data)
                setTestimonials(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <div className="lg:max-w-screen-xl mx-auto mt-20" >
            <div style={{ backgroundImage: "url('/public/image/carousel-2.jpg')" }}>
                <div className="container px-6 py-8 mx-auto bg-gray-900/60">
                    <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl text-white">
                        What clients saying
                    </h1>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-amber-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-amber-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-amber-500 rounded-full"></span>
                    </div>
                    <Carousel plugins={[plugin.current]}>
                        <CarouselContent>
                            {testimonials.map((client, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex items-start max-w-6xl mx-auto mt-8">
                                        <div>
                                            <p className="flex items-center text-center text-gray-300 mx-10 lg:mx-8">
                                                {client.body}
                                            </p>

                                            <div className="flex items-center justify-center mt-8">
                                                <img className="object-cover rounded-sm w-14 h-14" src={client.url} alt="" />

                                                <div className="mx-4 text-center">
                                                    <h1 className="font-semibold text-white">{client.name}</h1>
                                                    <span className="text-sm text-gray-400">Marketer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0" />
                        <CarouselNext className="right-0" />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
