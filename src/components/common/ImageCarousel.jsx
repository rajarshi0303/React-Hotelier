import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { NavLink } from "react-router-dom"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ImageCarousel() {

  let images = ["/public/image/carousel-1.jpg", "/public/image/carousel-2.jpg"]

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="bg-center bg-cover h-[28rem] max-w-screen-2xl mx-auto lg:h-[46rem]">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className={`bg-center bg-cover h-[28rem] max-w-screen-2xl mx-auto lg:h-[46rem] `} style={{ backgroundImage: `url('${image}')` }} >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/60">
                  <div className="text-center">
                    <div className="flex mx-auto mt-6 justify-center items-center">
                      <span className="inline-block w-14 h-[2px] bg-amber-500 rounded-full"></span>
                      <h1 className=" px-4 text-lg font-bold uppercase lg:text-lg text-white">
                        LUXURY LIVING
                      </h1>
                      <span className="inline-block w-14 h-[2px] bg-amber-500 rounded-full"></span>
                    </div>
                    <h1 className="text-3xl font-bold max-w-3xl text-white lg:text-6xl">Discover A Brand Luxurious Hotel</h1>
                    <div>
                      <NavLink to="/rooms">
                        <button className="w-auto px-10 py-4 mx-6 mt-4 text-base text-white uppercase bg-amber-500 lg:w-auto ">Our Rooms</button>
                      </NavLink>
                      <NavLink to="/booking">
                        <button className="w-auto px-10 py-4 mt-6 text-base bg-white uppercase  lg:w-auto ">Book a Room</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}
