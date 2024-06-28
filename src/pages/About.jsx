import React from 'react'
import Header from '@/layout/Header'
import AboutContent from '@/components/common/AboutContent'
import CheckInform from '@/components/form/CheckInform'
import Staffs from '@/components/common/Staffs'
import Footer from '@/layout/Footer'

export default function About() {
  return (
    <div>
      <Header title="About" next="services" />
      <CheckInform />
      <AboutContent />
      <Staffs />
      <Footer />
    </div>
  )
}
