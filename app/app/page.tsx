import React from 'react'
import data from '@/app/lib/HomeData.json';
import Hero from '../ui/Hero/Hero';
import About from '../ui/About/About';
import IconBox from '../ui/IconBox/IconBox';
import Skills from '../ui/Skills/Skills';
import ResumeSection from '../ui/Resume/ResumeSection';
import PortfolioSection from '../ui/Portfolio/PortfolioSection';
import ReviewSection from '../ui/Review/ReviewSection';
import BlogSection from '../ui/Blog/BlogSection';
import Contact from '../ui/Contact/Contact';

const Page = () => {
  const { heroData, socialData, aboutData, serviceData, skillData, resumeData, portfolioData, reviewData, blogData, contactData } = data;
  return (
    <>
      <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />
      <IconBox data={serviceData} data-aos="fade-right" />
      <Skills data={skillData} data-aos="fade-right" />
      <ResumeSection data={resumeData} data-aos="fade-right" />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}

export default Page