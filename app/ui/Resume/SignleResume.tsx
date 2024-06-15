import { Experience } from '@/app/lib/definition'
import React from 'react'

const SignleResume = ({ element }: { element: Experience }) => {
    const { title, duration, subTitle, text } = element;
    return (
        <div className="st-resume-timeline">
            <h3 className='st-resume-timeline-title'>{title}</h3>
            <div className="st-resume-timeline-duration">{duration}</div>
            <h4 className="st-resume-timeline-subtitle">{subTitle}</h4>
            <div className="st-resume-timeline-text">{text}</div>
        </div>
    )
}

export default SignleResume