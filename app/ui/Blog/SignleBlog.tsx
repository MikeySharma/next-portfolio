import { BlogInformationsData, ReviewInformationsData } from "@/app/lib/definition";
import "./Blog.scss";
import Link from "next/link";
import Image from "next/image";

const SignleBlog = ({ element }: { element: BlogInformationsData }) => {
    const { imgLink, title, date, designation, href } = element;
    return (
        <div className="st-post-single st-style1">
            <Link href={href} className="st-post-thumb st-zoom">
                <Image src={imgLink} className="st-zoom-in" alt="blog" height={200} width={200} />
            </Link>
            <div className="st-post-info">
                <div className="st-post-date">
                    By:
                    <Link href="blog-details.html" className="st-post-author">
                        designation
                    </Link>
                    <span className="st-post-date-divider">|</span>
                    <span className="st-post-publish-date">{date}</span>
                </div>
                <h4 className="st-post-title">
                    <Link href={href}>{title}</Link>
                </h4>
            </div>
        </div>
    )
}

export default SignleBlog