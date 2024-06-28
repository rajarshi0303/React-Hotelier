import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from './Title'

export default function ServiceCard() {
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/services")
      .then((response) => {
        setServices(response.data)
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  const icons = {
    room: <svg className=" w-11 h-11 text-amber-500 group-hover:text-white" data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path clipRule="evenodd" fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"></path>
    </svg>,
    food: <svg className=" w-11 h-11 text-amber-500 group-hover:text-white" fill="currentColor" viewBox="0 -3.84 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0">
    </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
      <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z"></path> </g> </g>
    </svg>,
    gym: <svg className=" w-11 h-11 text-amber-500 group-hover:text-white" fill="currentColor" viewBox="0 0 15 15" id="fitness-centre" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
      <path id="daec40ff-71f5-4432-9d75-dcba7b9c1b89" d="M14.5,7V8h-1v2h-1v1H11V8H4v3H2.5V10h-1V8H.5V7h1V5h1V4H4V7h7V4h1.5V5h1V7Z"></path> </g>
    </svg>,
    sports: <svg className=" w-11 h-11 text-amber-500 group-hover:text-white" fill="currentColor" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
      <path d="M189.61 310.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c16.02-14.77 34.5-22.58 53.46-22.58h16.3c18.96 0 37.45 7.81 53.46 22.58 3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c14.86-13.71 31.88-21.12 49.39-22.16l-112.84-80.6 18-12.86c3.64-2.58 8.28-3.52 12.62-2.61l100.35 21.53c25.91 5.53 51.44-10.97 57-36.88 5.55-25.92-10.95-51.44-36.88-57L437.68 98.47c-30.73-6.58-63.02.12-88.56 18.38l-80.02 57.17c-10.38 7.39-19.36 16.44-26.72 26.94L173.75 299c5.47 3.23 10.82 6.93 15.86 11.58zM624 352h-16c-26.04 0-45.8-8.42-56.09-17.9-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 343.58 442.04 352 416 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 343.58 250.04 352 224 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 343.58 58.04 352 32 352H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84 23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-512-96c44.18 0 80-35.82 80-80s-35.82-80-80-80-80 35.82-80 80 35.82 80 80 80z"></path></g>
    </svg>,
    party: <svg className=" w-11 h-11 text-amber-500 group-hover:text-white" fill="currentColor" viewBox="-0.89 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
      <path d="M56.6,42.23c-10.57-9.69-27.14-5.26-41.16-6.82c2.29-7.28,5.35-15.21,8.72-23.59 c2.98-7.42,3.01-7.41,8.55-6.22c1.02,0.22,2.18,0.47,3.35,0.7l18.46,3.64c0.93,0.26,1.62,0.67,2.09,1.22 c0.48,0.56,0.79,1.3,0.94,2.23c-0.09,2.7-0.13,5.69-0.17,8.81C57.3,28.52,57.21,35.45,56.6,42.23L56.6,42.23z M84.64,120.9 c-1.81,0.35-3.56-0.84-3.91-2.65c-0.35-1.81,0.84-3.56,2.65-3.91l14.07-2.72l-6.01-29.38c-2.05,0.2-4.02,0.17-5.89-0.09 c-4.12-0.57-7.76-2.22-10.93-4.92c-8.79-7.47-12.21-19.66-13.59-32.38c-1.38,12.71-4.8,24.9-13.59,32.38 c-3.18,2.7-6.82,4.35-10.93,4.92c-1.87,0.26-3.83,0.29-5.89,0.09l-6.42,31.41l13.52,2.62c1.81,0.35,3,2.1,2.65,3.91 c-0.35,1.81-2.1,3-3.91,2.65l-33.75-6.53c-1.81-0.35-3-2.1-2.65-3.91c0.35-1.81,2.1-3,3.91-2.65l13.67,2.64l6.44-31.47 c-0.24-0.07-0.48-0.15-0.73-0.23c-0.04-0.01-0.08-0.02-0.12-0.04C10.02,76.34,5.77,66.96,6.67,54.09 c0.84-12.06,6.39-27.18,13.15-44.01C24.28-1,24.32-0.99,33.68,1.02c0.91,0.2,1.95,0.42,3.27,0.68l18.5,3.65l0,0 c0.05,0.01,0.1,0.02,0.15,0.03c1.93,0.51,3.43,1.43,4.55,2.73c0.33,0.39,0.62,0.8,0.88,1.24c0.25-0.44,0.55-0.86,0.88-1.24 c1.12-1.3,2.63-2.22,4.55-2.73c0.05-0.01,0.1-0.02,0.15-0.03l0,0l18.5-3.65c1.32-0.26,2.36-0.48,3.27-0.68 c9.36-2.01,9.4-2.02,13.85,9.06c6.77,16.83,12.31,31.95,13.15,44.01c0.9,12.86-3.35,22.25-16.56,26.55 c-0.04,0.01-0.08,0.02-0.12,0.04c-0.24,0.08-0.49,0.15-0.73,0.23l6.02,29.45l13.13-2.54c1.81-0.35,3.56,0.84,3.91,2.65 c0.35,1.81-0.84,3.56-2.65,3.91L84.64,120.9L84.64,120.9z M74.1,59.53c-0.27-0.69,0.07-1.46,0.76-1.73s1.46,0.07,1.73,0.76 c1.71,4.35,4.08,7.55,7.02,9.75c2.93,2.18,6.46,3.39,10.51,3.74c0.74,0.06,1.28,0.71,1.22,1.45c-0.06,0.74-0.71,1.28-1.45,1.22 c-4.54-0.4-8.53-1.77-11.88-4.26C78.68,67.96,76.01,64.37,74.1,59.53L74.1,59.53z M65.56,43.33c15.19-6.85,30.94-14.24,39.03-13.99 c-1.95-5.55-4.24-11.42-6.69-17.52c-2.98-7.42-3.01-7.41-8.55-6.22c-1.02,0.22-2.18,0.47-3.35,0.7L67.55,9.94 c-0.93,0.26-1.62,0.67-2.09,1.22c-0.48,0.56-0.79,1.3-0.94,2.23c0.09,2.7,0.13,5.69,0.17,8.81C64.76,28.86,64.85,36.2,65.56,43.33 L65.56,43.33z M48.68,53.5c0.1-0.73,0.78-1.24,1.51-1.13c0.73,0.1,1.24,0.78,1.13,1.51c-0.75,5.14-2.52,9.25-5.21,12.44 c-2.69,3.2-6.26,5.45-10.58,6.87c-0.7,0.23-1.46-0.15-1.69-0.85c-0.23-0.7,0.15-1.46,0.85-1.69c3.87-1.27,7.03-3.25,9.38-6.05 C46.44,61.8,48,58.14,48.68,53.5L48.68,53.5z"></path> </g> </g>
    </svg>,
    spa: <svg className=" w-11 h-11 text-amber-500 group-hover:text-white" height="200px" width="200px" fill="currentColor" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
      <path d="M429.435,244.898c-21.155,50.07-46.688,81.923-86.492,105.662c57.474-52.359,89.336-158.471,66.959-224.034 c-27.059,0.72-50.312,8.878-74.05,30.25c21.978,51.422,21.076,123.375,0.087,173.592c-3.676,8.8-17.636,23.955-32.088,41.165 c37.983-45.249,48.171-183.32-12.146-253.27C281.638,105.302,269.786,94.36,256,86.574c-13.786,7.786-25.637,18.728-35.703,31.689 c-60.318,69.95-50.13,208.02-12.147,253.27c-14.453-17.21-28.412-32.365-32.087-41.165c-20.991-50.217-21.893-122.17,0.086-173.592 c-23.738-21.372-46.991-29.53-74.05-30.25c-22.378,65.563,9.485,171.675,66.959,224.034 c-39.804-23.739-65.338-55.592-86.493-105.662C56.225,221.229,17.756,218.264,0,224.185c25.152,162.762,183.484,201.24,256,201.24 c72.516,0,230.848-38.478,256-201.24C494.244,218.264,455.775,221.229,429.435,244.898z"></path> </g> </g></svg>

  }
  return (
    <div className='px-6 lg:px-16'>
      <div className="lg:max-w-screen-xl mx-auto">
        <Title title="our services" description="Explore Our" highlight="services"></Title>

        <div className="mt-10 grid justify-items-center grid-cols-1 gap-6 md:mb-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="max-w-md px-8 py-14 text-center group bg-white border shadow-lg hover:bg-amber-500">
              <span className="border-double border-[5px] p-2 inline-flex items-center">
                {icons[service.icon]}
              </span>
              <a href="#">
                <h5 className="mt-5 text-xl font-bold tracking-tight text-gray-900 group-hover:text-white">{service.title}</h5>
              </a>
              <p className="mt-2 font-normal text-gray-500 group-hover:text-white">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
