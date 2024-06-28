import React from 'react'
import Header from '@/layout/Header'
import ServiceCard from '@/components/common/ServiceCard'
import CheckInform from '@/components/form/CheckInform'
import Testimonials from '@/components/common/Testimonials'
import Footer from '@/layout/Footer'

export default function Services() {
  return (
    <div>
      <Header title="Services" next="rooms" />
      <CheckInform />
      <ServiceCard />
      <Testimonials />
      <Footer />
    </div>
  )
}
