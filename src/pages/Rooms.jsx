import React from 'react'
import Header from '@/layout/Header'
import CheckInform from '@/components/form/CheckInform'
import RoomCard from '@/components/common/RoomCard'
import Testimonials from '@/components/common/Testimonials'
import Footer from '@/layout/Footer'

export default function Rooms() {
  return (
    <div>
      <Header title="Rooms" next="contact" />
      <CheckInform />
      <RoomCard limit="all" />
      <Testimonials />
      <Footer />
    </div>
  )
}
