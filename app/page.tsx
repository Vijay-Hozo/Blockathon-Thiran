import Countdown from '@/Components/Countdown'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Themes from '@/Components/Themes'
import React from 'react'
import TimelineDemo from '@/Components/TimelineDemo'
import Prices from '@/Components/Prices'
import Guideline from '@/Components/Guideline'
import FAQ from '@/Components/FAQ'
import Footer from '@/Components/Footer'
const page = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Countdown />
      <Themes />
      <TimelineDemo />
      <Prices />
      <Guideline />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page