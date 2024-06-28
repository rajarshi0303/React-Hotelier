import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AboutContent() {
  return (
    <div className='lg:px-16'>
      <div className="container lg:max-w-screen-xl md:max-w-2xl mt-10 mx-auto px-4 lg:px-0 ">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center">
              <h1 className="text-base font-bold uppercase text-amber-500">
                About Us
              </h1>
              <span className="mx-2 inline-block w-14 h-[3px] bg-amber-500 rounded-full"></span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">Welcome to <span className="text-amber-500 ">HOTELIER</span></h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Diam dolor diam ipsum sit </p>

            <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-3">

              <div className="py-6 flex flex-col items-center justify-center border-double border-8">
                <svg className="w-14 text-amber-500" data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"></path>
                </svg>


                <h3 className="text-center text-lg tracking-tighter font-bold md:text-3xl">1234</h3>
                <p className="text-center text-gray-500">Rooms</p>
              </div>

              <div className="py-6 flex flex-col items-center justify-center border-double border-8">
                <svg className="w-14 text-amber-500" data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                </svg>


                <h3 className="text-center text-lg tracking-tighter font-bold md:text-3xl">1234</h3>
                <p className="text-center text-gray-500">Staffs</p>
              </div>

              <div className="py-6 flex flex-col items-center justify-center border-double border-8">
                <svg className="w-14 text-amber-500" data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"></path>
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"></path>
                </svg>


                <h3 className="text-center text-lg tracking-tighter font-bold md:text-3xl">1234</h3>
                <p className="text-center text-gray-500">Clients</p>
              </div>
            </div>
            <NavLink to="/services">
              <button className="w-auto px-14 py-4 mt-6 text-lg tracking-wider text-white uppercase bg-amber-500 lg:w-auto">Explore More</button>
            </NavLink>
          </div>

          <div className="flex items-center justify-end mt-10  lg:mt-0 lg:w-1/2">
            <div className="grid gap-x-4 gap-y-6 grid-cols-2 ">

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
        </div>
      </div>

    </div>
  )
}
