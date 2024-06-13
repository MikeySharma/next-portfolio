import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import './Header.scss';
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const Header = () => {
    const [mobileToggle, setMobileToggle] = useState(false);

    const handleToggleMenu = () => {
        setMobileToggle(!mobileToggle);
    }
    return (
        <header className="st-site-header st-style1 st-sticky-header">
            <div className="st-main-header">
                <div className="container mx-auto">
                    <div className="st-main-header-in">
                        <div className="st-main-header-left">
                            <Link className="st-site-branding" href="/" id="hero">
                                <Image src="/images/logo.png" alt="Mikey" height={190} width={190} title="Mikey" />
                            </Link>
                        </div>
                        <div className="st-main-header-right">
                            <div className="st-nav">
                                <ul className={clsx(
                                    "st-nav-list st-onepage-nav",
                                    {
                                        "hidden": mobileToggle,
                                    }, {
                                    "block": !mobileToggle
                                }
                                )}>
                                    <li><ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Home</ScrollLink></li>
                                    <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>About</ScrollLink></li>
                                    <li><ScrollLink to="resume" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Resume</ScrollLink></li>
                                    <li><ScrollLink to="portfolio" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Portfolio</ScrollLink></li>
                                    <li><ScrollLink to="blog" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Blog</ScrollLink></li>
                                    <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Contact</ScrollLink></li>
                                </ul>
                                <div className={clsx(
                                    "st-menu-toggle",
                                    {
                                        "st-toggle-active": mobileToggle,
                                    }
                                )} onClick={handleToggleMenu}>
                                    <span></span>
                                </div>
                                <div className="sp-phone">
                                    <svg viewBox="0 0 513.64 513.64">
                                        <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                                    </svg>
                                    <div className="sp-phone-no"> +977 9825850687</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header