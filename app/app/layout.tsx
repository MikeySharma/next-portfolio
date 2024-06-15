'use client';
import { useEffect, useState } from "react";
import PreLoader from "../ui/PreLoader/PreLoader";
import CustomPointer from "../ui/CustomPointer/CustomPointer";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import Aos  from "aos";
import 'aos/dist/aos.css';

const Layout = ({ children }:
    Readonly<{
        children: React.ReactNode;
    }>) => {
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        Aos.init({once: true});
        setTimeout(() => {
            setIsLoader(false)
        }, 1000)
    }, [])
    return (
        <>
            {
                isLoader ?
                    <PreLoader />
                    :
                    (<>
                        <CustomPointer />
                        <Header />
                        {children}
                        <Footer />
                    </>)
            }
        </>
    )
}

export default Layout