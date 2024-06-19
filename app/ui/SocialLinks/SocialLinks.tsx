'use client';
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { Icon } from '@iconify/react';
import '@/app/ui/Contact/Contact.scss';

const SocialLinks = ({ data }: any) => {
    const [activeLink, setActiveLink] = useState(0);
    const handleIconHover = (index: number) => {
        setActiveLink(index);
    }
    return (
        <div className="st-social-link">
            {
                data.map((item: any, index: number) => (
                    <Link
                        href={item.link}
                        target="_blank"
                        className={clsx(
                            '',
                            {
                                'st-social-btn active': index === activeLink,
                            },
                            {
                                'st-social-btn': index !== activeLink
                            }
                        )}
                        onMouseEnter={() => handleIconHover(index)}
                        key={index}
                    >
                        <span className="st-social-icon">
                            <Icon icon={`${item.icon}`} />
                        </span>
                        <span className="st-icon-name">{item.title}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default SocialLinks