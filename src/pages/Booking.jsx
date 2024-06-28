import React from 'react'
import Header from '@/layout/Header'
import CheckInform from '@/components/form/CheckInform'
import Title from '@/components/common/Title'
import Bookingform from '@/components/form/Bookingform'
import Footer from '@/layout/Footer'

export default function Booking() {
    return (
        <div>
            <Header title="Booking" next="rooms" />
            <CheckInform />
            <Title title="room booking" description="book a" highlight="Luxury room" />
            <Bookingform />
            <Footer />
        </div>
    )
}
