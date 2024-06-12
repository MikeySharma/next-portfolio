'use client';
import { useEffect, useState } from "react";
import PreLoader from "../ui/PreLoader/PreLoader";
import CustomPointer from "../ui/CustomPointer/CustomPointer";

const Layout = ({ children }:
    Readonly<{
        children: React.ReactNode;
    }>) => {
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
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
                    (<div>
                        <CustomPointer />
                        {children}
                    </div>)
            }
        </>
    )
}

export default Layout