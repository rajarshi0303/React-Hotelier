import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function VideoContent() {
    const [video, setVideo] = useState(false)

    function handleClick() {
        setVideo(!video)
    }
    return (
        <div className='my-20'>
            <div className="lg:max-w-screen-2xl mt-10 mx-auto bg-gray-900">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2 pt-8 px-10 lg:px-12 lg:pt-0">
                        <div className="flex items-center">
                            <h1 className="text-lg font-bold uppercase text-white">
                                Luxury Living
                            </h1>
                            <span className="mx-2 inline-block w-14 h-[3px] bg-amber-500 rounded-full"></span>
                        </div>
                        <h1 className="mt-4 text-3xl font-bold text-white lg:text-5xl">Discover A Brand <br /> Luxurious Hotel</h1>
                        <p className="mt-6 text-white">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div >
                            <NavLink to="/rooms">
                                <button className="px-4 lg:px-8 py-4 mt-6 text-base tracking-wider text-white uppercase bg-amber-500 w-auto">Explore More</button>
                            </NavLink>
                            <NavLink to="/booking">
                                <button className="mx-4 px-4 lg:px-8 py-4 mt-6 text-base tracking-wider  uppercase bg-white w-auto">Book A Room</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-end mt-10  lg:mt-0 lg:w-1/2">
                        <img className='w-full' src="public/image/video.jpg" />
                        <button onClick={handleClick}>
                            <span className="absolute flex left-1/2 top-1/2 h-16 w-16">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75">
                                </span>
                                <span className="relative inline-flex h-16 w-16 ">
                                    <svg className='w-16 h-16 text-amber-500 bg-black rounded-full' data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"></path>
                                    </svg>
                                </span>
                            </span>
                        </button>

                        <div className={`fixed flex justify-center top-0 right-0 left-0 z-50 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900/60 ${video ? '' : 'hidden'}`}>
                            <div className="relative p-4 w-full max-w-3xl max-h-full">
                                <div className="relative bg-white shadow ">
                                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Preview
                                        </h3>
                                        <button onClick={handleClick} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className=" space-y-4">
                                        <video className="w-full" autoPlay muted controls>
                                            <source src="public\video\preview.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
