import React, { useEffect, useState } from 'react'
import Title from './Title'
import axios, { all } from 'axios'
import { NavLink } from 'react-router-dom'

export default function RoomCard(props) {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/rooms", { params: { _limit: props.limit } })
            .then((response) => {
                console.log(response.data)
                setRooms(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className='lg:px-16'>
            <div className="lg:max-w-screen-xl mx-auto mt-12">
                <Title title="our rooms" description="Explour our" highlight="rooms"></Title>
                <div className="mt-10 grid justify-items-center grid-cols-1 px-6 gap-6  lg:px-0 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
                        <Card key={room.id} id={room.id} title={room.title} url={room.url} price={room.price} rating={room.rating} bed={room.bed} bath={room.bath} body={room.body} />
                    ))}

                </div>
            </div>
        </div>
    )
}

function Card({ id, title, url, price, rating, bed, bath, body }) {
    return (
        <div className="w-full bg-white border border-gray-200 shadow-xl">
            <img src={url} alt="" />
            <div className="px-5 pb-5">
                <a href="#" className="relative bottom-3 px-4 py-1 text-sm uppercase text-center text-white bg-amber-500">
                    ${price}/Night
                </a>
                <div className="flex justify-between">
                    <h5 className="mb-2 text-xl capitalize font-bold text-gray-900 ">{title}</h5>

                    <div className="flex items-center">
                        {Array.from({ length: rating }).map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-amber-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <div className="flex mb-3" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-8 h-6 me-1 text-amber-400" fill="currentColor" viewBox="0 0 14.00 14.00" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                    <path d="M 4.3,7 C 5.1270625,7 5.8,6.32706 5.8,5.5 5.8,4.67294 5.1270625,4 4.3,4 3.4729375,4 2.8,4.67294 2.8,5.5 2.8,6.32706 3.4729375,7 4.3,7 Z m 6.6,-2.4 -4.2,0 C 6.53425,4.6 6.4,4.73425 6.4,4.9 l 0,2.7 -4.2,0 0,-3.9 C 2.2,3.53425 2.06575,3.4 1.9,3.4 l -0.6,0 C 1.13425,3.4 1,3.53425 1,3.7 l 0,6.6 c 0,0.16575 0.13425,0.3 0.3,0.3 l 0.6,0 c 0.16575,0 0.3,-0.13425 0.3,-0.3 l 0,-0.9 9.6,0 0,0.9 c 0,0.16575 0.13425,0.3 0.3,0.3 l 0.6,0 c 0.16575,0 0.3,-0.13425 0.3,-0.3 L 13,6.7 C 13,5.54013 12.059875,4.6 10.9,4.6 Z"></path></g>
                                </svg>
                                {bed} Bed
                            </span>
                        </li>
                        <li className="text-gray-300">|</li>
                        <li className="inline-flex items-center">
                            <span href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-8 h-5 me-1 text-amber-400" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g>
                                    <path d="M57.122,266.166V68.137c0-17.601,14.319-31.921,31.921-31.921c15.019,0,27.64,10.429,31.024,24.423 c-13.723,8.525-24.149,21.291-29.759,36.708c-6.625,18.202-5.766,37.892,2.421,55.446l7.056,15.133l131.438-61.291l-7.056-15.132 c-8.185-17.554-22.718-30.87-40.919-37.495c-10.243-3.73-20.96-5.087-31.5-4.102c-7.912-27.166-33.017-47.082-62.704-47.082 c-36.014,0-65.312,29.299-65.312,65.312v198.029H0v33.391h24.168c1.83,34.981,9.574,63.856,23.549,87.873 c12.414,21.335,29.568,38.088,50.985,49.794c4.843,2.647,9.921,5.028,15.209,7.16l-31.218,46.052l27.639,18.737l37.421-55.201 c12.927,2.334,26.759,3.526,41.465,3.526h133.565c14.707,0,28.538-1.192,41.465-3.526l37.421,55.201l27.639-18.737l-31.218-46.052 c5.289-2.133,10.366-4.512,15.209-7.16c21.417-11.707,38.571-28.459,50.985-49.794c13.974-24.016,21.719-52.892,23.549-87.873H512 v-33.392H57.122z"></path> </g> </g> </g>
                                </svg>
                                {bath} Bath
                            </span>
                        </li>
                        <li className="text-gray-300">|</li>
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 ">
                                <svg className="w-5 h-5 me-2.5 text-amber-500" data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"></path>
                                </svg>
                                Wifi
                            </a>
                        </li>
                    </ol>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>
                <div className="flex items-center justify-between">
                    <NavLink to={`/roomdetails/${id}`}>
                        <span className="  px-5 py-2 text-sm uppercase text-center text-white bg-amber-500">
                            view details
                        </span>
                    </NavLink>
                    <NavLink to="/booking">
                        <span className="  px-5 py-2 text-sm uppercase text-center text-white bg-gray-800">
                            book now
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
