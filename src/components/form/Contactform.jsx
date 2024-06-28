import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Contactform() {
    const [data, setData] = useState({ name: "", email: "", subject: "", message: "" })

    function handleChange(event) {
        let { name, value } = event.target
        setData((prevdata) => ({ ...prevdata, [name]: value }))
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:3000/contact", data)
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
                    <iframe width="100%" height="95%" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                </div>

                <div className="flex flex-col  justify-center w-full p-6 pt-6 lg:w-1/2 lg:pt-0">
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

                        <div className="relative z-0 w-full mb-5 border border-gray-300  px-4 group ">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                onChange={handleChange}
                                className="block py-3.5 px-0 w-full text-base text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer" placeholder=" " required />
                            <label htmlFor="subject" className="bg-white peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 peer-focus:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-x-95 peer-focus:-translate-y-6"> Subject </label>
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
                            send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
