import React from 'react'
import ImageCarousel from '@/components/common/ImageCarousel'
import CheckInform from '@/components/form/CheckInform'
import AboutContent from '@/components/common/AboutContent'
import RoomCard from '@/components/common/RoomCard'
import VideoContent from '@/components/common/VideoContent'
import ServiceCard from '@/components/common/ServiceCard'
import Testimonials from '@/components/common/Testimonials'
import Staffs from '@/components/common/Staffs'
import Footer from '@/layout/Footer'

export default function Home() {
  return (
    <div>
      <ImageCarousel />
      <CheckInform />
      <AboutContent />
      <RoomCard limit="3" />
      <VideoContent />
      <ServiceCard />
      <Testimonials />
      <Staffs />
      <Footer />
    </div>
  )
}
