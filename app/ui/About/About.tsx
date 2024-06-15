import './About.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AboutData } from '@/app/lib/definition';

const About = ({ data }: { data: AboutData }) => {
    const { imgLink, title, subtitle, text, details, cvPdf } = data;
    return (
        <section id="about" className='st-about-wrap'>
            <div className="st-height-b100 st-height-lg-b80"></div>
            <SectionHeading title='About Me' />
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="st-about-img-wrap">
                            <div className="st-about-img st-bg" style={{ backgroundImage: `url(${imgLink})`, backgroundPosition: 'top', filter: 'brightness(0.8)' }} data-aos="fade-right" data-aos-duration='800' data-aos-delay="400"></div>
                        </div>
                        <div className="st-height-b0 st-height-lg-b30"></div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="st-vertical-middle" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                            <div className="st-vertical-middle-in">
                                <div className="st-text-block st-style1" data-aos-duration="1000" data-aos-delay="500">
                                    <h2 className='st-text-block-title'>{title}</h2>
                                    <h4 className="st-text-block subtitle">{subtitle}</h4>
                                    <div className="st-text-block-text"></div>
                                    <p>{text}</p>
                                </div>
                                <ul className="st-text-block-details st-mp0">
                                    {details.map((item: any, index: number) => (
                                        <li key={index}>
                                            <span>{item.title}</span> : <span>{item.info}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="st-text-block-btn">
                                    <a href={cvPdf} className='st-btn st-style1 st-color1' download>Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About