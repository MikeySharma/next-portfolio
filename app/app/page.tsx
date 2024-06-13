import React from 'react'
import {heroData, socialData, aboutData} from '@/app/lib/HomeData.json';
import Hero from '../ui/Hero/Hero';
import About from '../ui/About/About';

const Page = () => {
  return (
    <div className='min-h-screen'>
      <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />
    </div>
  )
}

export default Page