import React from 'react'
import Header from '@/layout/Header'
import CheckInform from '@/components/form/CheckInform'
import Title from '@/components/common/Title'
import Contactform from '@/components/form/Contactform'
import Footer from '@/layout/Footer'

export default function Contact() {
    return (
        <div>
            <Header title="Contact" next="about" />
            <CheckInform />
            <Title title="contact us" description="Contact" highlight="For any Query" />
            <Contactform />
            <Footer />
        </div>
    )
}
