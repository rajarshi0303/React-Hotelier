import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function CheckInform() {
  const [data, setData] = useState({ checkIn: "", checkOut: "", adult: 0, child: 0 })

  function handleChange(event) {
    let { name, value } = event.target;
    setData((prevdata) => ({ ...prevdata, [name]: value }))
  }
  function handleSubmit(event) {
    event.preventDefault()

    axios.post("http://localhost:3000/checkin", data)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className='lg:px-16'>
      <section className="relative -top-14 max-w-sm lg:max-w-screen-xl p-6 mx-auto bg-white shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:gap-6 sm:grid-cols-5">
            <div>
              <input
                id="checkIn"
                name="checkIn"
                onChange={handleChange}
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-none focus:rounded-sm focus:ring-4 focus:ring-orange-100" />
            </div>

            <div>
              <input
                id="checkOut"
                name="checkOut"
                onChange={handleChange}
                type="time"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-none focus:rounded-sm focus:ring-4 focus:ring-orange-100" />
            </div>

            <div>
              <select
                id="adult"
                name="adult"
                onChange={handleChange}
                className="max-w-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-none focus:rounded-sm focus:ring-4 focus:ring-orange-100">
                <option defaultValue="0" >Adult</option>
                <option value="1">Adult 1</option>
                <option value="2">Adult 2</option>
                <option value="3">Adult 3</option>
                <option value="4">Adult 4</option>
              </select>
            </div>

            <div>
              <select
                id="child"
                name="child"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 focus:outline-none focus:rounded-sm focus:ring-4 focus:ring-orange-100">
                <option defaultValue="0">Child</option>
                <option value="1">Child 1</option>
                <option value="2">Child 2</option>
                <option value="3">Child 3</option>

              </select>
            </div>

            <div>
              <button type="Submit" className="block w-full px-4 py-2 mt-2 text-white bg-amber-500 text-center uppercase">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
