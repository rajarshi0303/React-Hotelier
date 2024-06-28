import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Bookingform() {
    const [data, setData] = useState({ name: "", email: "", checkin: "", checkout: "", adult: 0, child: 0, room: "", message: "" })

    function handleChange(event) {
        let { name, value } = event.target
        console.log(name, value)
        setData((prevdata) => ({ ...prevdata, [name]: value }))
    }
    function handleSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:3000/Booking", data)
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <section className="mt-14 bg-white lg:flex max-w-screen-xl mx-auto">
                <div className="px-6 lg:px-0 flex justify-start lg:w-1/2">
                    <div className="grid gap-x-6 gap-y-6 grid-cols-2 ">
                        <div className="justify-self-end self-end">
                            <a href="#" className="group -mb-2 block w-36 md:w-64 lg:w-52 overflow-hidden">
                                <img src="public/image/about-1.jpg" />
                            </a>
                        </div>
                        <div>
                            <a href="#" className="group -mb-2 block w-full overflow-hidden">
                                <img src="/public/image/about-2.jpg" />
                            </a>
                        </div>
                        <div className="justify-self-end">
                            <a href="#" className="group block w-24 md:w-44 lg:w-36 overflow-hidden">
                                <img src="/public/image/about-3.jpg" />
                            </a>
                        </div>
                        <div>
                            <a href="#" className="group block w-36 md:w-64 lg:w-52 overflow-hidden">
                                <img src="/public/image/about-4.jpg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full p-8 pt-6 lg:w-1/2 lg:px-10 lg:pt-0">
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={handleChange}
                                    className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                <label htmlFor="name" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Your Name </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                <label htmlFor="email" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Your Email </label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                                <input
                                    type="datetime-local"
                                    name="checkin"
                                    id="checkin"
                                    onChange={handleChange}
                                    className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                <label htmlFor="checkin" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Check In </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                                <input
                                    type="datetime-local"
                                    name="checkout"
                                    id="checkout"
                                    onChange={handleChange}
                                    className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                <label htmlFor="checkout" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Check Out </label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                                <select
                                    id="adult"
                                    name="adult"
                                    onChange={handleChange}
                                    className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer">
                                    <option defaultValue="0" >Adult</option>
                                    <option value="1">Adult 1</option>
                                    <option value="2">Adult 2</option>
                                    <option value="3">Adult 3</option>
                                    <option value="4">Adult 4</option>
                                </select>

                                <label htmlFor="adult" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Select Adult </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                                <select
                                    id="child"
                                    name="child"
                                    onChange={handleChange}
                                    className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer">
                                    <option defaultValue="0">Child</option>
                                    <option value="1">Child 1</option>
                                    <option value="2">Child 2</option>
                                    <option value="3">Child 3</option>

                                </select>
                                <label htmlFor="child" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Select Child </label>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                            <select
                                id="room"
                                name="room"
                                onChange={handleChange}
                                className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer">
                                <option defaultValue="Junior Suit">Junior Suit</option>
                                <option value="Executive Suit">Executive Suit</option>
                                <option value="Suer Delux">Suer Delux</option>

                            </select>
                            <label htmlFor="room" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Select A Room </label>
                        </div>

                        <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                            <textarea
                                name="message"
                                id="message"
                                onChange={handleChange}
                                className="h-36 block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer" placeholder=" " required />
                            <label htmlFor="message" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Message </label>
                        </div>

                        <button type='submit' className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-500 ">
                            book now
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
