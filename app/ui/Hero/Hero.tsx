'use client';
import { useEffect } from 'react';
import './Hero.scss';
import parser from 'html-react-parser';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import SocialLinks from '../SocialLinks/SocialLinks';

const Hero = ({ data, socialData }: any) => {
    const { bgImgLink, subTitle, title, designation, imgLink } = data;
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            const heroElements = document.querySelector('.st-hero-wrap .st-hero-img');
            if (heroElements) {
                (heroElements as HTMLDivElement).style.right = `${scrollValue * -0.1}px`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    },[])
    return (
        <section id='home' className='st-hero-wrap'>
            <div className="st-height-b80 st-height-lg-b80"></div>
            <div className="st-hero st-style1 st-bg"
                style={{ backgroundImage: `url(${bgImgLink})` }}>
                <div className="container">
                    <div className="st-hero-text">
                        <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            {subTitle}
                        </h3>
                        <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            {parser(title)}
                        </h1>
                        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            {designation}
                        </h2>
                        <div className="st-hero-btn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                            <ScrollLink className='st-btn st-style1 st-color1' to='contact'>
                                Hire Me
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="st-hero-img st-to-right">
                <Image src={`${imgLink}`} alt="Hero" style={{filter : "drop-shadow(2px 4px 6px black)"}} height="608" width="850" ></Image>
                <div className="st-social-group">
                    <SocialLinks data={socialData} />
                </div>
            </div>
        </section>
    )
}

export default Hero