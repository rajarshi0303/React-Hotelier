import React from 'react'

export default function Title({ title, description, highlight }) {
  return (
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center">
          <span className="mx-2 inline-block w-14 h-[2px] bg-amber-500 rounded-full"></span>
          <h1 className="text-base font-bold uppercase text-amber-500">
            {title}
          </h1>
          <span className="mx-2 inline-block w-14 h-[2px] bg-amber-500 rounded-full"></span>
        </div>
        <h1 className="mt-2 text-2xl font-bold capitalize text-gray-800 md:text-4xl">{description} <span className="text-amber-500 uppercase">{highlight}</span></h1>
      </div>
    </div>
  )
}
