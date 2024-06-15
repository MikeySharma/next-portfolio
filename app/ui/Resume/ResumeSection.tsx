import './Resume.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import SignleResume from './SignleResume';
import { Education, Experience, ResumeData } from '@/app/lib/definition';
import Image from 'next/image';

const ResumeSection = ({ data }: { data: ResumeData }) => {
    const { educationTitle, education, experience, experienceTitle } = data;
    return (
        <section id="resume" className='st-dark-bg'>
            <div className="st-height-b100 st-height-lg-b80"></div>
            <SectionHeading title="Resume" />
            <div className="container mx-auto px-4"
                data-aos="fade-up"
                data-aos-duration="800" data-aos-delay="200">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
                    <div className="col-span-1">
                        <div className="st-height-b0 st-height-lg-b50"></div>
                        <div className="st-resume-wrap">
                            <div className="st-resume-heading">
                                <Image src="/icon/resume-icon1.png" alt="resume-icon" height="40" width="35" />
                                <h2 className="st-resume-heading-title">{educationTitle}</h2>
                            </div>
                            <div className="st-height-b50 st-height-lg-b30"></div>
                            <div className="st-resume-timeline-wrap">
                                {
                                    education.map((education: Education, index: number) => (
                                        <SignleResume element={education} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="st-height-b0 st-height-lg-b50"></div>
                        <div className="st-resume-wrap">
                            <div className="st-resume-heading">
                                <Image src="/icon/resume-icon2.png" alt="resume-icon" height="30" width="45" />
                                <h2 className="st-resume-heading-title">{experienceTitle}</h2>
                            </div>
                            <div className="st-height-b50 st-height-lg-b30"></div>
                            <div className="st-resume-timeline-wrap">
                                {experience.map((experience: Experience, index: number) => (
                                    <SignleResume element={experience} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>

        </section>
    )
}

export default ResumeSection