import { BackdropClassKey } from "@mui/material"

interface Details {
    title: string,
    info: string,
}
export interface AboutData {
    imgLink: string,
    title: string,
    subtitle: string,
    text: string,
    details: Details[],
    cvPdf: string
}


export interface ServiceData {
    services: Services[],
}

export interface Services {
    imgLink: string,
    title: string,
    text: string,
    effect: string,
    duration: string,
    delay: string
}

export interface SkillData {
    title: string,
    text: string,
    skills: Skill[],
}

export interface Skill {
    title: string,
    progress: string,
    effect: string,
    duration: string,
    delay: string,
}

export interface PortfolioItems {
    imgLink: string,
    imgLinkLg: string,
    title: string,
    subTitle: string,
    effect: string,
    duration: string,
    delay: string,
}

export interface PortfolioData {
    portfolioItems: PortfolioItems[]
}

export interface Experience {
    title: string,
    duration: string,
    subTitle: string,
    text: string,
}

export interface Education {
    title: string,
    duration: string,
    subTitle: string,
    text: string
}

export interface ResumeData {
    experienceTitle: string,
    experience: Experience[],
    educationTitle: string,
    education: Education[],
}

export interface ModalData {
    img: string | number,
    title: string | number,
    subTitle: string,
    modalClose: any,
    open: boolean,
}
export interface BlogData {
    useFor: string,
    sliderSetting: {
        infinite: boolean,
        speed: number,
        slidesToShow: number,
        slidesToScroll: number,
        arrows: boolean,
        responsive: BlogResponsiveData[],
    }
    informations: BlogInformationsData[],
}

export interface BlogResponsiveData {
    breakpoint: number,
    settings: {
        slidesToShow: number,
        autoplay: boolean,
    }
}

export interface BlogInformationsData {
    imgLink: string,
    designation: string,
    date?: string,
    title: string,
    href?: string,
    text?: string
}

export interface ContactData {
    formTitle: string,
    title: string,
    subTitle: string,
    text: string
}


export interface SocialData {
    icon: string,
    title: string,
    link: string,
}