import "./Contact.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import SocialLinks from "../SocialLinks/SocialLinks";
import { ContactData, SocialData } from "@/app/lib/definition";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Contact = ({ data, socialData }: { data: ContactData, socialData: SocialData[] }) => {
    const { title, text, subTitle } = data;

    return (
        <section id="contact" className="st-dark-bg">
            <div className="st-height-b100 st-height-lg-b80"></div>
            <SectionHeading title="Contact" />
            <div className="container mx-auto px-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100">
                <div className="grid grid-cols-12 gap-12 w-full">
                    <div className="lg:col-span-6 col-span-12">
                        <h3 className="st-contact-title">Just Say Hello</h3>
                        <div id="st-alert"></div>
                        <ContactForm />
                        <div className="st-height-b0 st-height-lg-b30"></div>
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <div className="st-height-b0 st-height-lg-b40"></div>
                        <h3 className="st-contact-title">{title}</h3>
                        <div className="st-contact-text">{text}</div>
                        <div className="st-contact-info-wrap">
                            <div className="st-single-contact-info">
                                <div className="st-icon-wrap">
                                    <Icon icon="fa-regular:envelope" />
                                </div>
                                <div className="st-single-info-details">
                                    <h4>Email</h4>
                                    <Link href="mailto:mikeysharma98@gmail.com">mikeysharma98@gmail.com</Link>
                                    <Link href="mailto:support@mikeysharma.com">support@mikeysharma.com</Link>
                                </div>
                            </div>
                            <div className="st-single-contact-info">
                                <div className="st-icon-wrap">
                                    <Icon icon="fa-solid:phone-alt" />
                                </div>
                                <div className="st-single-info-details">
                                    <h4>Phone</h4>
                                    <span>+977 9825850687</span>
                                    <span>+977 98258506687</span>
                                </div>
                            </div>
                            <div className="st-single-contact-info">
                                <div className="st-icon-wrap">
                                    <Icon icon="mdi:location" />
                                </div>
                                <div className="st-single-info-details">
                                    <h4>Address</h4>
                                    <span>Janakpur, Madhesh Province, <br /> Nepal</span>
                                </div>
                            </div>
                            <div className="st-social-info">
                                <div className="st-social-text">{subTitle}</div>
                                <SocialLinks data={socialData} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
        </section>
    )
}

export default Contact